import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activite } from 'src/app/back-office/classes/activite';
import { Commentaire } from 'src/app/back-office/classes/commentaire';
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
  aimermenu!:boolean;
  afficher:boolean=false;
  constructor(private activiteService:ActiviteService,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.identifiant=this.activatedRoute.snapshot.params['id']
    this.activiteService.getUneActivite(this.identifiant).subscribe(
       (data)=>{
         this.activite=data
       }
     )
    this.activiteService.updatenblikesactivite( this.activite.nblikes);
    this.nblikes = this.activiteService.getTotalLikes();
    if(this.nblikes==1){
      this.aimermenu=true
    }
    else{
      this.aimermenu=false
    }
   }

   onaffichercomment(){
    if(!this.afficher){
      this.afficher=true;
    }
    else{
      this.afficher=false;
    }
   }

   

}










