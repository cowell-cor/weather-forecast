import { AfterViewInit,Component,ElementRef,OnInit, Input,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

import { ForecastService } from '../../services/forecast.service';
import { Weather } from "../../models/weather.model";
@Component({
  selector: 'search-weather',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchWeatherComponent implements OnInit, AfterViewInit  {

  @Input('placeholder')
  text='City Name'
  displayedColumns = ["temp", "weather.description", "timezone", "more"];
  form;

  @ViewChild('input') input: ElementRef;
  weatherData$: Observable<Weather[]>;
  constructor(private forecastService: ForecastService, private fb : FormBuilder) { 
    this.form = fb.group({
      city:['', Validators.required]
    })
  }
  /** get weather for given city with debounceTime = 350ms*/
 ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(350),
        distinctUntilChanged(),
        tap(() => {
          const weather$ = this.forecastService.getWeather(this.input.nativeElement.value);
          this.weatherData$ = weather$.pipe(map(res => res) );
        })
      )
      .subscribe();
  }
  ngOnInit() {
  }

  /**Clear input value and disable clear button */
  clear(input){
     input.value='';
     this.form.setErrors({ 'invalid': true });
  }
}
