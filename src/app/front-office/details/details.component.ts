import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activite } from 'src/app/back-office/classes/activite';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  lesactivites!:Activite[];
  identifiant!:number
  activite!:Activite
  nblikes!:number
  constructor(private activiteService:ActiviteService,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.identifiant=this.activatedRoute.snapshot.params['id']
    this.activiteService.getUneActivite(this.identifiant).subscribe(
       (data)=>{
         this.activite=data
       }
     )
    this.activiteService.updatenblikesactivite( this.activite.nblikes);
   }
}


