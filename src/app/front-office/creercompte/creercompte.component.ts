import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.component.html',
  styleUrls: ['./creercompte.component.css']
})
export class CreercompteComponent implements OnInit{
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
