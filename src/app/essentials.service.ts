import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EssentialsService {

  
  
  allTask:Subject<number> = new BehaviorSubject<number>(0);
  inCompTask:Subject<number> = new BehaviorSubject<number>(0);
  compTask:Subject<number> = new BehaviorSubject<number>(0);
 
  theList: any[] = [];

  constructor() { 
    this.count();
  }

   addTaskToDisplay(mission: string):Observable<any>[]{
    let creation = new Date();
    this.theList.push({taskName:mission,status:'Pending',creationTime:creation});
    this.count();
    return this.theList;
  }

  finishedTask(index:number):Observable<any>[]{
    this.theList[index].status='Completed';
    this.count();
    return this.theList;
  }

  removeTheTask(index:number):Observable<any>[]{
    this.theList.splice(index,1);
    this.count();
    return this.theList;
  }

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
