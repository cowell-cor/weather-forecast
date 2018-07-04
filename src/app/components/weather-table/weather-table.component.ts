import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Router } from '@angular/router';
import { Weather } from '../../models/weather.model';
import { WeatherDialogComponent } from '../weather-dialog/weather-dialog.component';

@Component({
  selector: 'weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css']
})
export class WeatherTableComponent implements OnInit {
  @Input()
  data : Weather[];

  @Input()
  cols : any;
  displayedColumns: any;
  constructor( private dialog: MatDialog,public router: Router) { }

  ngOnInit() {
    this.displayedColumns = this.cols;
  }
  /** redirect to search page*/
  redirect(){
    this.router.navigate(['./search']);
  }

  /** Show weather details dialog*/
  viewDetails({ city_name, country_code, datetime, pres, sunrise, sunset, temp, timezone}: Weather) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.data = {
      city_name, country_code, datetime, pres, sunrise, sunset, temp, timezone
    };

    this.dialog.open(WeatherDialogComponent,
      dialogConfig);

  }

}
