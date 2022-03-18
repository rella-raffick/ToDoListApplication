import { Component } from '@angular/core';
import { EssentialsService } from './essentials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoListApplication';

  //The Array of Lists
  theList: any[]=[];

  constructor(private serv : EssentialsService){
  }


  //Adding Missions to the List - redirects the control to addTaskToDisplay() method in the services
  addingToTheList(mission:any){
    if(mission!=''){
        this.serv.addTaskToDisplay(mission).subscribe();
    }
  }


}
