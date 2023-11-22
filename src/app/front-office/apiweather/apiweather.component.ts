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


  // weatherData: any;

  // getWeather(): void {
  //   this.acitiviteService.getWeather("Tunisia").subscribe((data) => {
  //     this.weatherData = data;
  //     console.log(this.weatherData);
  //   });
  // }

  //data: any;


  //   ngOnInit(): void {
  //   this.acitiviteService.getData().subscribe((result) => {
  //     this.data = result;
  //     console.log(this.data);
  //   });
  // }
}
