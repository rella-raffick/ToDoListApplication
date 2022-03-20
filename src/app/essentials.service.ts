import { Json } from './interJson';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EssentialsService {

  baseurl = 'https://todolistapplication-5f304-default-rtdb.firebaseio.com/theList';
  
  
  //Subjects for the Task Counts - All, Incomplete & Completed
  allTask:Subject<number> = new BehaviorSubject<number>(0);
  inCompTask:Subject<number> = new BehaviorSubject<number>(0);
  compTask:Subject<number> = new BehaviorSubject<number>(0);
 
  //The Array of Arrays
  theList : Json={} as Json;
  aList : any[]=[];
  list:Subject<Json[]>=new Subject<Json[]>();

  //Instantiates the counting method
  constructor(private http : HttpClient) { 
    // this.count();
    this.getMethod();
  }

  //Adds the Mission to the List and pushes the taskname, status & creation time.
  addTaskToDisplay(mission: string,category:string){
    let creation = new Date();
    this.theList.taskName= mission; 
    this.theList.taskCategory = category; 
    this.theList.status='Pending';
    this.theList.creationTime=creation;
    this.http.post(this.baseurl+'.json',this.theList).subscribe(res=>
      this.getMethod()
    );
    
  }

  getMethod(){
     this.http.get(this.baseurl+'.json').subscribe((data: any) => {
      this.aList = [];
      if (data) {
        this.aList = Object.keys(data).map((key: any) => {
          data[key].id = key;
          this.aList=data[key];
          console.log(this.aList);
          return data[key];
        });
        this.list.next(this.aList)
      }
    });
  }

   finishedTask(key:any){
    let temp={status:'Completed'};
    this.http.patch(`${this.baseurl}/${key}.json`,temp).subscribe(res=>{
      console.log(res);
      this.getMethod();
    })
  }

   removeTheTask(key:any){
    this.http.delete(`${this.baseurl}/${key}.json`).subscribe(res=>{
      this.getMethod();
    })
  }


  

  
}
