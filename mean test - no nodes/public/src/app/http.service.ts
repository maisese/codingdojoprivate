import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getAllrest(){
    return this._http.get('/restaurants')
  }

  createRest(obj){
    return this._http.post('/restaurants/new', obj)
  }

  getEditRest(id){
    return this._http.get('/restaurants/'+ id +'/edit')
  }

  putOneRest(obj){
    return this._http.put('/restaurants/'+ obj["_id"] +'/put', obj)
  }

  deleteCake(obj){
    return this._http.delete('/restaurants/delete/'+obj["_id"], obj)
  }

  

}
