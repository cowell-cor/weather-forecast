import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Weather} from "../../models/weather.model";

@Component({
    selector: 'weather-dialog',
    templateUrl: './weather-dialog.component.html',
    styleUrls: ['./weather-dialog.component.css']
})
export class WeatherDialogComponent implements OnInit {
    city :string;
    condition:string;
    datetime: string;
    pres: number;
    sunrise: string;
    sunset: string;
    timezone:string;
    temp: number;
    country:string;
    constructor(
        private dialogRef: MatDialogRef<WeatherDialogComponent>,
        @Inject(MAT_DIALOG_DATA) { 
          city_name, country_code, datetime, pres, sunrise, sunset, temp, timezone
        }:Weather ) 
        {
          this.city=city_name;
          this.country = country_code;
          this.datetime=datetime;
          this.pres=pres;
          this.sunrise=sunrise;
          this.sunset=sunset;
          this.timezone = timezone;
          this.temp = temp;
    }

    ngOnInit() {

    }
/** Close weather info dialog */
    close() {
        this.dialogRef.close();
    }
  }