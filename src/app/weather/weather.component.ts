import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weathers: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getWeathers();
  }
  getWeathers() {
    return this._http
      .get('http://localhost:5000/weatherforecast')
      .subscribe((res) => {
        this.weathers = res;
      });
  }


}
