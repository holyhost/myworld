import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { GdMap } from 'src/app/utils/gdmap.util';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  mapUtil: GdMap;//在nginit的时候初始化

  constructor(
    public data: DataService
  ) { }

  ngOnInit() {
    //实例化地图，地图才能显示，默认显示的是北京
    this.initBaseData()

  }

  async initBaseData(){
    this.mapUtil = new GdMap('container')
    //地图初始化需要时间。这边暂停一下
    await this.mapUtil.sleep(1200);
    this.data.mapUtil = this.mapUtil
    this.mapUtil.location(success=>{
      let position = [success.position.lng,success.position.lat]
      this.mapUtil.map.setCenter(position)
      this.mapUtil.addSelfMarker(position[0],position[1])
    },error=>{
      console.log(error)
    })
    this.mapUtil.locateByIP(success=>{
      this.data.aimCity = success.city
    },error=>{
      console.log(error)
    })
  }

  ngAfterViewInit(): void {

  }

 

}
