import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get("./assets/mockData.json")
  }
}

// 1. Zawsze importowac HttpClient
// 2. zapis zawsze this.http.GET/POST/PUT/DELETE("ENDPOINT")
// 3. przy funkcji zawsze dopisac Observable<any>