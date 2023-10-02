import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { ForecastComponent } from './pages/forecast/forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/current-weather', pathMatch: 'full' }, // Redirect to the current weather page on the root URL
  { path: 'current-weather', component: WeatherComponent },
  { path: 'forecast', component: ForecastComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
