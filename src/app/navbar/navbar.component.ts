import { EssentialsService } from './../essentials.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(private serv : EssentialsService) {
    this.getMethod();
    
   }

  taskCategories: string[] = ["Personal","Work","Others"];

  allCount:number=0;
  incompCount:number=0;
  compCount:number=0;

  list: any[]=[];

    getMethod() {
    this.serv.list.subscribe(data=>{
      this.list=data;
      console.log(this.list);
      this.getCount(this.list);
    })
  }

  getCount(theList:any[]) {
    this.allCount=theList.length;
    this.incompCount=0;
    this.compCount=0;
    for(let i=0;i<theList.length;i++){
      if(theList[i].status=='Completed'){
        this.compCount=this.compCount+1;
      }
      if(theList[i].status=='Pending'){
        this.incompCount=this.incompCount+1;
      }
    }
  }

  ngOnInit(): void {
  }

}
