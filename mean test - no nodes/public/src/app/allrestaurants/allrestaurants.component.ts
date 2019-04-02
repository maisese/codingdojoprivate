import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-allrestaurants',
  templateUrl: './allrestaurants.component.html',
  styleUrls: ['./allrestaurants.component.css']
})
export class AllrestaurantsComponent implements OnInit {
  allrestaurants: any;
  restaurant:any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllrest();
   
  }

  getAllrest(){
    this._httpService.getAllrest().subscribe( data => {
      console.log('Here are your restaurants', data)
      this.allrestaurants = data['restaurants']
    })
  }

  deleteCake(restaurant) {
    console.log('in the delete cake');
    let tempObservable = this._httpService.deleteCake(restaurant);
    tempObservable.subscribe(data => console.log("Deleting this one task!", data));
    this.gorestPage();
  };

  gorestPage() {
    this._router.navigate(['/allrestaurants']);
  }

}
