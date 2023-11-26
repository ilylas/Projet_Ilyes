import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-apiweather',
  templateUrl: './apiweather.component.html',
  styleUrls: ['./apiweather.component.css']
})
export class ApiweatherComponent{

  constructor(private acitiviteService:ActiviteService){}

  weatherData: any;
  city!:string

  ngOnInit(): void {}

  getweather(): void {
    this.acitiviteService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

}
