import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DateUtilService } from 'src/app/service/date-util.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  curDate: Date = new Date()//当前时间

  constructor(
    public dateUtil: DateUtilService,
    public data: DataService,
    ) { }

  ngOnInit() {
    this.updateDate()
    this.data.initWeatherInfo()
  }

  updateDate(){
    setInterval(()=>{
      this.curDate = new Date()
    },1000)
  }

}
