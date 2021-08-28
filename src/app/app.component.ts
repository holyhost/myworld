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
  curIndex = 0;
  menu:any[] = [
    {id:0,name:'map',icon:''},
    {id:0,name:'weather',icon:''},
  ]

  ngOnInit(): void {

    
  }

  onMenuClick(){
    this.curIndex+=1
    this.curIndex = this.curIndex %this.menu.length
  }
}
