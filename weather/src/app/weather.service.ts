import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}
  
  fetchData(city: string, apiKey: string): Observable<any> {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    return this.httpClient.get(apiUrl).pipe(
      map((data: any) => {
        // Modify the name field within the location object
        data.location.name += 'ik';
        // Return the entire data object with the modified name
        return data;
      })
    );
  }

fetchFutureData(city: string, apiKey: string): Observable<any> {
  const apiUrlFuture = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;
  console.log(apiUrlFuture);
  return this.httpClient.get(apiUrlFuture);
}
}
