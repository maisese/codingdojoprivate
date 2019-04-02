import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { AllrestaurantsComponent } from './allrestaurants/allrestaurants.component';
import { UpdaterestaurantComponent } from './updaterestaurant/updaterestaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    NewrestaurantComponent,
    AllrestaurantsComponent,
    UpdaterestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
