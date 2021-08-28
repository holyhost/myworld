import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GdMap } from 'src/app/utils/gdmap.util';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  mapUtil: GdMap;//在nginit的时候初始化

  constructor() { }

  ngOnInit() {
    //实例化地图，地图才能显示，默认显示的是北京
    this.initBaseData()

  }

  async initBaseData(){
    this.mapUtil = new GdMap('container')
    //地图初始化需要时间。这边暂停一下
    await this.mapUtil.sleep(1200);
    this.mapUtil.location(success=>{
      console.log(success)
      let position = [success.position.lng,success.position.lat]
      this.mapUtil.map.setCenter(position)
      this.mapUtil.addSelfMarker(position[0],position[1])
    },error=>{
      console.log(error)
    })
    // this.mapUtil.locateByIP(success=>{
    //   console.log(success)
    //   this.mapUtil.map.opts.center([success.position])
    // },error=>{
    //   console.log(error)
    // })
    this.mapUtil.weatherInfo('番禺区',res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

  ngAfterViewInit(): void {

  }

 

}
