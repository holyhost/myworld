import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * 根据天气，返回对应的图标
 */
export class IconService {

  constructor() { }

  icon(name:string='多云'):string{
    if(!name){
      name = '多云'
    }
    let icon = '';
    switch(name){
      case '大雨转晴':
        icon = '#icon-dayuzhuanqing'
        break;
      case '多云转晴':
        icon = '#icon-duoyunzhuanqing'
        break;
      case '暴雨':
        icon = '#icon-baoyu'
        break;
      case '多云':
        icon = '#icon-duoyun'
        break;
      case '暴雨转晴':
        icon = '#icon-baoyuzhuanqing'
        break;
      case '浮尘':
        icon = '#icon-fuchen'
        break;
      case '雷阵雨':
        icon = '#icon-leizhenyu'
        break;
      case '晴天':
        icon = '#icon-qingtian'
        break;
      case '晴':
        icon = '#icon-qingtian'
        break;
      case '闪电':
        icon = '#icon-shandian'
        break;
      case '少云':
        icon = '#icon-shaoyun'
        break;
      case '特大雷震雨':
        icon = '#icon-tedaleizhenyu'
        break;
      case '晚间晴天':
        icon = '#icon-wanjianqingtian'
        break;
      case '特大扬沙':
        icon = '#icon-tedayangsha'
        break;
      case '晚间多云':
        icon = '#icon-wanjianduoyun'
        break;
      case '雾':
        icon = '#icon-wu'
        break;
      case '扬沙':
        icon = '#icon-yangsha'
        break;
      case '小雨':
        icon = '#icon-xiaoyu'
        break;
      case '晚间少云':
        icon = '#icon-wanjianshaoyun'
        break;
      case '阴天':
        icon = '#icon-yintian'
        break;
      case '阴':
        icon = '#icon-yintian'
        break;
      case '暴雪':
        icon = '#icon-baoxue'
        break;
      case '晚间多云转晴':
        icon = '#icon-wanjianduoyunzhuanqing'
        break;
      case '阵雨':
        icon = '#icon-zhenyu'
        break;
      case '雨夹雪':
        icon = '#icon-yujiaxue'
        break;
      case '中雪':
        icon = '#icon-zhongxue'
        break;
        //默认给多云
      default:
        icon = '#icon-shaoyun'
    }

    return icon
  }
}
