import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/model';

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

    this.getMethod();
  }

  
  addingToTheList(mission:any,category:any){
    if(mission!=''){
      this.serv.addTaskToDisplay(mission,category);   
      this.getMethod(); 

    }
  }

  userModel = new Model('','');

   getMethod() {
    this.serv.list.subscribe(data=>{
      // this.calculateCount(data)
      this.theList=data;
     
    })
  }


}
