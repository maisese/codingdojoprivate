import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newrestaurant',
  templateUrl: './newrestaurant.component.html',
  styleUrls: ['./newrestaurant.component.css']
})
export class NewrestaurantComponent implements OnInit {
  restaurant:any;
  nameError: any;
  cuisineError: any;
  

  constructor(private _httpService: HttpService,  private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  this.restaurant = { name: "", cuisine: ""};
  }

  createNew(){
    this._httpService.createRest(this.restaurant).subscribe( data => {
      if (data['Message']== "Error"){
        console.log(data['err'])
        if(data['err']['errors']['name']['message']){
          this.nameError=data['err']['errors']['name']['message']
        }
        if(data['err']['errors']['cuisine']['message']){
          this.cuisineError=data['err']['errors']['cuisine']['message']
        }
      } else {
        console.log(data['restaurant']); 
        this.gorestPage();
      }
    })
  }

  gorestPage() {
    this._router.navigate(['/allrestaurants']);
  }

}