import { Component } from '@angular/core';
import { Router } from '@angular/router';
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


}
