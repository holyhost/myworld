import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getWeekDay(date: Date):string{
    let days = '';
    switch(date.getDay()) {
      case 1:
            days = '星期一';
            break;
      case 2:
            days = '星期二';
            break;
      case 3:
            days = '星期三';
            break;
      case 4:
            days = '星期四';
            break;
      case 5:
            days = '星期五';
            break;
      case 6:
            days = '星期六';
            break;

      case 0:
            days = '星期日';
            break;
    }
    return days;

  }
}
