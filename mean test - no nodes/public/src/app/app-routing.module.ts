import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllrestaurantsComponent } from './allrestaurants/allrestaurants.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { UpdaterestaurantComponent } from './updaterestaurant/updaterestaurant.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/allrestaurants' },
  { path: 'allrestaurants',component: AllrestaurantsComponent },
  { path: 'new',component: NewrestaurantComponent },
  { path: ':id/edit',component: UpdaterestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
