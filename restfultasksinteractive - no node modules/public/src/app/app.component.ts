import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  //variables
  tasks: any; //set the capture right here
  editTaskid: any;
  lastTask:any;
  peanutbutter: any;
  jelly: any;
  bananas: any;
  showtaskdesc: any;
  //
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    //this is how the page is loaded
    this.getalltasks();
    // this.deleteTask();
    this.jelly = false;
    this.bananas = false;
  };

  getalltasks() {
    console.log('in get task');
    let tempObservable = this._httpService.getalltasks();
    tempObservable.subscribe(
      data => {
        console.log("Got our tasks!", data)
        this.peanutbutter = data;
        // this.editTaskid = data["tasks"][data['tasks'].length - 1]["_id"]
        this.lastTask = data["tasks"][data['tasks'].length - 1]
      })
  };

  postTask() {
    console.log('in post task');
    let tempObservable = this._httpService.postTask({});
    tempObservable.subscribe(data => console.log("Posting your task!", data));
  };

  getEditTask() {
    console.log('the get edit task');
    let tempObservable = this._httpService.getEditTask({});
    tempObservable.subscribe(data => console.log("Got your ONE task to edit!", data));
  };

  putEditTask() {
    console.log('in the put edit task');
    let tempObservable = this._httpService.putEditTask({});
    //go to postman, and place test object here, change order of operations on load. Go to NGonit, and put this route first.
    tempObservable.subscribe(data => console.log("Updating your ONE task!", data));
  };

  deleteTask() {
    console.log('in the delete task');
    let tempObservable = this._httpService.deleteTask({

      _id: "5c8d95cf2afbf736141374d8",
      title: "go home and nap",
      description: "probably for a while",
      completed: false,
      createdAt: "2019-03-17T00:33:19.197Z",
      updatedAt: "2019-03-17T00:33:19.197Z",
      __v: 0

    });
    tempObservable.subscribe(data => console.log("Deleting this one task!", data));
  };

  jellyTrue() {
    this.jelly = true;
  };

  showdesc(task) {
    this.showtaskdesc = task;
  };

  bananasTrue() {
    this.bananas = true;
  };
  

  onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log("Got our data!", data));
  };

}
