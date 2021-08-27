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
    this.mapUtil = new GdMap('container')


  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.mapUtil.locateByIP(success=>{
        console.log(success)
      },error=>{
        console.log(error)
      })
    }, 2000);
  }

 

}
