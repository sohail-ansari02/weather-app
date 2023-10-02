import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ForecastComponent } from './pages/forecast/forecast.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, ForecastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
