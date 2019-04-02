import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-updaterestaurant',
  templateUrl: './updaterestaurant.component.html',
  styleUrls: ['./updaterestaurant.component.css']
})
export class UpdaterestaurantComponent implements OnInit {
  // qrestaurants: any;
  restaurant:any;
  nameError: any;
  cuisineError: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    // this.qrestaurants = { name: "", cuisine: "" };
    this.restaurant = { name: "", cuisine: "" };;
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this._httpService.getEditRest(params['id']).subscribe(data => {
        console.log(data)
        this.restaurant = data['restaurant']
      });
    });

    

  }

  editRest(){
    this._httpService.putOneRest(this.restaurant).subscribe( data => {
      if (data['Message'] == "Error"){
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
