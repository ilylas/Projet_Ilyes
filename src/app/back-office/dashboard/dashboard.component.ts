import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public logout(){
    localStorage.removeItem('state');
  }

  nblikes:number=0;
  aimermenu:boolean=false;

  constructor(private activiteService:ActiviteService){}

ngOnInit(): void {
  this.nblikes = this.activiteService.getTotalLikes();
  if(this.nblikes==1){
    this.aimermenu=true
  }
}

}
