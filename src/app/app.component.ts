import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myworld';
  open: boolean = false; // 控制菜单的显示
  curIndex = 0;
  showMsg: false;
  menu:any[] = [
    {id:0,name:'map',icon:'#icon-ditu',label:'地图'},
    {id:0,name:'weather',icon:'#icon-tianqi',label:'天气'},
    {id:0,name:'weather',icon:'#icon-shezhi',label:'设置'},
  ]
  //传个theme，让他自动初始化
  constructor(theme:ThemeService){}

  ngOnInit(): void {
    setTimeout(() => {
      this.curIndex = 1
    }, 2500);
  }

  pageClick(){
    this.open = false;
  }
  onMenuClick(event){
    this.open = !this.open
    event.stopPropagation()
  }

  onMenuItemClick(index:number= 0){
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
