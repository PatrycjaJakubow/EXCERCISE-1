import { Component } from "@angular/core";
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityInput: string = '';
  weatherData: any;
  futureWeatherData: any;

  constructor(private weatherService: WeatherService) {}


  getWeather() {
    const apiKey = '44c3eeabac60474782a114227240805';
      this.weatherService.fetchData(this.cityInput, apiKey)
        .subscribe((data: any) => {
          this.weatherData = data;
          console.log(this.weatherData);
        });
        setTimeout(() => { this.weatherService.fetchFutureData(this.cityInput, apiKey)
        .subscribe((futureData: any) => {
          this.futureWeatherData = futureData;
          console.log(this.futureWeatherData)
        }) }, 3000)
    }
  }

