import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchWeatherComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchWeatherComponent }, 
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}