import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Weather } from '../models/weather.model';

@Injectable()
export class ForecastService {
  // Weather endpoint URL
  private apiUrl = 'http://api.weatherbit.io/v2.0/current?key=60f5d492671c4a9a8f14b3478ddb0c79';

  constructor(
    private http: HttpClient) {
  }


  getWeather(city): Observable<Weather[]> {
    const param = city || 'Toronto';
    return this.http.get(`${this.apiUrl}&city=${param}`).pipe(map(res => 
      res['data']
    ));
  }
}
