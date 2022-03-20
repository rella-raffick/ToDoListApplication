import { Model } from './../../model';
import { BehaviorSubject, switchMap } from 'rxjs';
import {Json } from './../interJson';
import { EssentialsService } from './../essentials.service';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {

  constructor(private serv : EssentialsService) { 
    this.getMethod();
  }
  @Input('list') theList:any[]=[];

  addingToTheList(mission:any,category:any){
    if(mission!=''){
      this.serv.addTaskToDisplay(mission,category);   
      this.getMethod(); 

    }
  }

   getMethod() {
    this.serv.list.subscribe(data=>{
      // this.calculateCount(data)
      this.theList=data;
     
    })
  }
   //Adding Missions to the List - redirects the control to addTaskToDisplay() method in the services

  
  // //Marking the mission finished - carrying the control to finishedTask() method in Service
  // finishTask(index:any){
  //   this.serv.finishedTask(index);
  //  }

   finishTask(id:any){
    this.serv.finishedTask(id);
  }

    removeTask(id:any){
    this.serv.removeTheTask(id);
  }

  userModel = new Model('','');

  // //Removing the mission - carrying the control to removeTheTask() method in Service
  // (index:number){
  //   let mission=this.serv.(index);
  //   this.theList=mission;
  // }

 

}
