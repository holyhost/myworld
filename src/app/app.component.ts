import { Component } from '@angular/core';
import {load }  from '@amap/amap-jsapi-loader';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myworld';
  map: any;//地图

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    load({
      "key": "123456",      // 申请好的Web端开发者Key，首次调用 load 时必填
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
        this.map = new AMap.Map('container');
    }).catch(e => {
        console.log(e);
    })
      
    }
}
