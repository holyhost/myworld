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
  open: boolean = false; // 控制菜单的显示
  curIndex = 1;
  menu:any[] = [
    {id:0,name:'map',icon:'#icon-ditu',label:'地图'},
    {id:0,name:'weather',icon:'#icon-tianqi',label:'天气'},
    {id:0,name:'weather',icon:'#icon-shezhi',label:'设置'},
  ]

  ngOnInit(): void {

    
  }

  pageClick(){
    console.log('pageClick')
    this.open = false;
  }
  onMenuClick(event){
    console.log('onMenuClick')
    this.open = !this.open
    event.stopPropagation()
  }

  onMenuItemClick(index:number= 0){
    console.log(index)
    this.curIndex = index
  }

  changeMenuIcon():string{
    if(this.open){
      return'#icon-caidan-lanse'
    }else{
      return '#icon-caidan-baise-copy'
    }
  }
}
