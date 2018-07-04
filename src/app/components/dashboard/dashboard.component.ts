import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { ForecastService } from '../../services/forecast.service';
import { Weather } from "../../models/weather.model";


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherData$: Observable<Weather[]>;
  /**Columns to be shown in weather-table */
  displayedColumns = ["temp", "weather.description", "timezone", "more","search"];
  constructor(private forecastService: ForecastService, private dialog: MatDialog) { }

  /* Fetching the Weather for current user location 
    TODO - its hard coded to 'Toronto' as Geolocation api is supported for
    https call (for chrome > 50), one's its deployed on secure server change 
    this, to fetch the current user location by implementing 
    navigator.geolocation.getCurrentPosition api
  */
  city = 'Toronto';
  ngOnInit() {
    const weather$ = this.forecastService.getWeather(this.city);
    this.weatherData$ = weather$.pipe(map(res => res));
  }

}
