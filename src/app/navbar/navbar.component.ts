import { EssentialsService } from './../essentials.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private serv : EssentialsService) {
    this.getCount();
   }

  allCount:number=0;
  incompCount:number=0;
  compCount:number=0;
  getCount() {
    this.serv.allTask.subscribe(
       content=>this.allCount=content
     )
     this.serv.inCompTask.subscribe(
       content=>this.incompCount=content
     )
     this.serv.compTask.subscribe(
       content=>this.compCount=content
     )
  }

  ngOnInit(): void {
  }

}
