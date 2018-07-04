import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatButtonModule, 
  MatInputModule, 
  MatCardModule, 
  MatToolbarModule, 
  MatTabsModule,
  MatTableModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchWeatherComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { CityComponent } from './components/city/city.component';
import { AboutComponent } from './components/about/about.component';
import { ForecastService } from './services/forecast.service';
import { WeatherDialogComponent } from './components/weather-dialog/weather-dialog.component';
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchWeatherComponent,
    DashboardComponent,
    CityComponent,
    AboutComponent,
    WeatherDialogComponent,
    WeatherTableComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    ForecastService
  ],
  bootstrap: [AppComponent],
  entryComponents: [WeatherDialogComponent]
})
export class AppModule { }
