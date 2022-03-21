import { EssentialsService } from './../essentials.service';
import { Component, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
    theList:any[]=[];
    cat:any = "";

  constructor(private serv : EssentialsService, private route: ActivatedRoute) { 
      this.getMethod();
      this.route.paramMap.subscribe((Params) => {
      this.cat = Params.get('id');
    })
  }

  getMethod(){
     this.serv.list.subscribe(data=>{
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

  

  // //Removing the mission - carrying the control to removeTheTask() method in Service
  // (index:number){
  //   let mission=this.serv.(index);
  //   this.theList=mission;
  // }

 

}
