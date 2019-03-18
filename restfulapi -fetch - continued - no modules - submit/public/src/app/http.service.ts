import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient){
  }

  getalltasks(){
    return this._http.get('/tasks')
  }

  postTask(obj){
    return this._http.post('/task/new', obj)
  }
  //to pass data to the database, in angular, you will pass it an object, and you will use obj


  getEditTask(obj){
    return this._http.get('/task/edit/', obj)
  }

  putEditTask(obj){
    return this._http.put('/task/'+obj["_id"], obj)
  }

  deleteTask(obj){
    return this._http.delete('/task/delete/'+obj["_id"], obj)
  }

}

