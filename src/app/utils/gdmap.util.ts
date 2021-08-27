import {load }  from '@amap/amap-jsapi-loader';

/**
 * 高德地图工具类
 */
//高德控制台申请创建的key，必填
const mapKey='123456';
export class GdMap{
    map: any;//地图
    Amap: any;//操作地图用的工具类
    city: string = ''

    constructor(divId:string='container') {
        let self = this;
        load({
            "key": mapKey,      // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '2.0'  // Loca 版本，缺省 1.3.2
            },
          }).then((AMap)=>{
              //初始化地图
              self.map = new AMap.Map(divId);
              //保存AMap，后面调用地图各个插件都用得到
              self.Amap = AMap
          }).catch(e => {
              console.log("初始化地图失败！")
              console.log(e);
          })
    }

    /**
     * 通用定位
     * @param success 成功回调
     * @param error 失败回调
     */
    public location(success,error){
        let self = this;
        //定位插件
        this.Amap.plugin('AMap.Geolocation', function() {
            var geolocation = new self.Amap.Geolocation({
              // 是否使用高精度定位，默认：true
              enableHighAccuracy: true,
              // 设置定位超时时间，默认：无穷大
              timeout: 10000,
              // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
              buttonOffset: new self.Amap.Pixel(10, 20),
              //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              zoomToAccuracy: true,     
              //  定位按钮的排放位置,  RB表示右下
              buttonPosition: 'RB'
            })
          
            geolocation.getCurrentPosition(function(status,result){
                  if(status=='complete'){
                      success(result)
                  }else{
                      error(result)
                  }
            });
            // self.map = new self.Amap.Map('container', {
            //     center: [data.position.lng, data.position.lat],
            //     layers: [//使用多个图层
            //         // new AMap.TileLayer.Satellite(),
            //         // new AMap.TileLayer.RoadNet()
            //     ],
            //     zooms: [4,18],//设置地图级别范围
            //     zoom: 13
            //   });
          
          })
    }

    /**
     * 通过ip定位
     * @param success 成功回调
     * @param error 失败回调
     */
    public locateByIP(success,error){
        let self = this;
         //ip定位，获取当前城市信息
         this.Amap.plugin('AMap.CitySearch', function () {
            var citySearch = new self.Amap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
              if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                success(result)
                self.city = result.city
              }else{
                error(status)
              }
            })
          })
    }

    /**
     * 天气信息
     * @param success 成功回调
     * @param error 失败回调
     */
    public weatherInfo(city:string,success,error){
        let self = this;
        //加载天气查询插件
        this.Amap.plugin('AMap.Weather', function() {
        //创建天气查询实例
            var weather = new self.Amap.Weather();
            //执行实时天气信息查询
            weather.getLive(city, function(err, data) {
                success(data)
                error(err)
            });
        });
    }

    //添加默认的marker
    public addMarker(lng:any , lat: any){
        if(this.Amap){
          let marker = new this.Amap.Marker({
            position: [lng,lat], //位置
            title: this.city
          })

        }else{
          console.log('Amap is null!')
        }
    
    }

    //添加圆形marker
    public addCircleMarker(lng,lat){
        let circle = new this.Amap.CircleMarker({
            center:[lng,lat],
            radius:10+Math.random()*10,//3D视图下，CircleMarker半径不要超过64px
            strokeColor:'white',
            strokeWeight:2,
            strokeOpacity:0.5,
            fillColor:'rgba(0,0,255,1)',
            fillOpacity:0.5,
            zIndex:10,
            bubble:true,
            cursor:'pointer',
            clickable: true
        })
        this.map.add(circle)
    }
}