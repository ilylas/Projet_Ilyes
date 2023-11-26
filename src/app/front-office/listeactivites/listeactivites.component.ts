import { Component, OnInit } from '@angular/core';
import { Activite } from '../../back-office/classes/activite';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-listeactivites',
  templateUrl: './listeactivites.component.html',
  styleUrls: ['./listeactivites.component.css']
})
export class ListeactivitesComponent implements OnInit{
  searchTerm!:string;
  lesactivites!:Activite[];
  nblikes!:number
  activite!:Activite|undefined
  activitedate!:Activite[]
  Search!:Activite
  trouve!:boolean

  constructor(private activiteService:ActiviteService){}


  ngOnInit(){
   this.activiteService.getActivite().subscribe(
      data=>{
        this.lesactivites=data
      }
    )
  }

  aimer(activite:Activite){
    activite.nblikes++;
    this.activiteService.updateActivite(activite,activite.id).subscribe()
  }

  Rcherchecombine(text:string){
    if(text!=""){
      if (!isNaN(Number(text))){
        this.activiteService.getUneActivite((Number(text))).subscribe( 
          (data) => {
              this.Search=data
              this.trouve = true;
            }
        );    
      }
      else{
        this.activiteService.getUneActiviteByDate(text).subscribe(
          (data) => {
              this.Search=data
              this.trouve = true;
              console.log(this.Search)
          }
        );
      }
    }
  }
}
