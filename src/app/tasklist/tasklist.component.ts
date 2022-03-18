import { EssentialsService } from './../essentials.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  constructor(private serv : EssentialsService) { 
    
  }

  @Input('list') theList:any[]=[];
  
  //Marking the mission finished - carrying the control to finishedTask() method in Service
  finishTask(index:number){
    let mission =this.serv.finishedTask(index);
    this.theList=mission;
  }

  //Removing the mission - carrying the control to removeTheTask() method in Service
  removeTask(index:number){
    let mission=this.serv.removeTheTask(index);
    this.theList=mission;
  }

  ngOnInit(): void {
    this.serv.getJson().subscribe(data=>console.log(data));
  }

}
