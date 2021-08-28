import { Injectable } from '@angular/core';
import { GdMap } from '../utils/gdmap.util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public weatherInfo: any;//实时天气信息
  public forecasts: any;//天气预报信息，包括当天以及后面三天
  public aimCity = '上海市' //目标城市
  public mapUtil: GdMap;//高德地图实例
  constructor() { }

  public initWeatherInfo(){
    if(!this.mapUtil){
      console.log("地图未初始化")
      return
    }
    this.mapUtil.weatherInfo(this.aimCity,res=>{
      console.log(res)
      if(res){
        this.weatherInfo = res
        this.aimCity = res.city
      }
      
    },forecast=>{
      this.forecasts = forecast
    },err=>{
      console.log(err)
    })
  }
}
