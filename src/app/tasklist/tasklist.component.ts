import { EssentialsService } from './../essentials.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  constructor(private serv : EssentialsService) { }

  @Input('list') theList:any[]=[];
  

  finishTask(index:number){
    let mission =this.serv.finishedTask(index);
    this.theList=mission;
  }

   removeTask(index:number){
    let mission=this.serv.removeTheTask(index);
    this.theList=mission;
  }

  ngOnInit(): void {
  }

}
