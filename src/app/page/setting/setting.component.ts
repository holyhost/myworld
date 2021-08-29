import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  city:string = ''
  constructor(
    public data: DataService,
    public theme: ThemeService) { }

  ngOnInit() {
  }


  save(event){
    this.data.aimCity = this.city
    event.stopPropagation()
  }

  changeTheme(theme:string){
    this.theme.changeTheme(theme)
  }

}
