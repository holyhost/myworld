import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  city:string = ''
  constructor(public data: DataService) { }

  ngOnInit() {
  }


  save(event){
    this.data.aimCity = this.city
    event.stopPropagation()
  }

}
