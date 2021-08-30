import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DateUtilService } from 'src/app/service/date-util.service';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit,OnDestroy {
  itvalId: any[] = []
  curDate: Date = new Date()//当前时间

  constructor(
    public dateUtil: DateUtilService,
    public data: DataService,
    public icon: IconService,
    ) { }

  ngOnInit() {
    this.updateDate()
    this.data.initWeatherInfo()
    let id = setInterval(()=>{
      this.data.initWeatherInfo()
    },(600000+Math.round(Math.random()*1000)))//10分钟更新一下
    this.itvalId.push(id)
  }

  updateDate(){
    setInterval(()=>{
      this.curDate = new Date()
    },1000)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('OnDestroy')
    if(this.itvalId&&this.itvalId.length>0){
      this.itvalId.forEach(id=>window.clearInterval(id))
    }
  }

}
