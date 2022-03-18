import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {getJson} from './interJson';

@Injectable({
  providedIn: 'root'
})

export class EssentialsService {

  
  //Subjects for the Task Counts - All, Incomplete & Completed
  allTask:Subject<number> = new BehaviorSubject<number>(0);
  inCompTask:Subject<number> = new BehaviorSubject<number>(0);
  compTask:Subject<number> = new BehaviorSubject<number>(0);
 
  //The Array of Arrays - JSON
  theList: any[] = [];

  //Instantiates the counting method
  constructor(private http:HttpClient) { 
    this.count();
  }

  getJson():Observable<getJson>{
    return this.http.get<getJson>('https://todolistapplication-5f304-default-rtdb.firebaseio.com/theList.json');
  }


  //Adds the Mission to the List and pushes the taskname, status & creation time.
  //Also invokes count() method to update the count.
  addTaskToDisplay(mission: string):Observable<any>{
    let creation = new Date();
    this.theList.push({taskName:mission,status:'Pending',creationTime:creation});
    this.count();
    return this.http.post('https://todolistapplication-5f304-default-rtdb.firebaseio.com/theList.json',this.theList);
  }




  //Removes the mission from the incomplete list and changes the status to Completed
  //So that it is displayed in the Completed Missions Section
  //Also invokes count() method to update the count.
  finishedTask(index:number):Observable<any>[]{
    this.theList[index].status='Completed';
    this.count();
    return this.theList;
  }

  //Removes the mission entirely from the theList[] list of array.
  //Also invokes count() method to update the count.
  removeTheTask(index:number):Observable<any>[]{
    this.theList.splice(index,1);
    this.count();
    return this.theList;
  }

  //Counts all status typed tasks and invoked upon need.
  count() {
    let all : number=0;
    let comp : number = 0;
    let incomp : number = 0;

    all = this.theList.length;

    for(let i=0;i<all;i++){
        if(this.theList[i].status=='Pending'){
          incomp+=1;
        }
        if(this.theList[i].status=='Completed'){
          comp+=1;
        }
      }

      this.allTask.next(all);
      this.inCompTask.next(incomp);
      this.compTask.next(comp);
  }
}
