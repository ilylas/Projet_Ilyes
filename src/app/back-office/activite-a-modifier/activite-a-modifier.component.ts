import { Component, OnInit } from '@angular/core';
import { Activite } from '../classes/activite';
import { Details } from '../classes/details';
import { ActiviteService } from '../services/activite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activite-a-modifier',
  templateUrl: './activite-a-modifier.component.html',
  styleUrls: ['./activite-a-modifier.component.css']
})
export class ActiviteAModifierComponent implements OnInit {
  lesactivites!:Activite[]
  constructor(private activiteService:ActiviteService,private activatedRoute:ActivatedRoute){}

  ancienid!: number;
  nouveauTitre!: string;
  nouvelleimage!: string;
  nblikes!:number;
  dispo!:boolean;
  nouvelledate!:Date;
  nouvelintervenant!:string;
  nouvelendroit!:string;
  nouvelprerequis!:string;

  ngOnInit(){
    this.ancienid=this.activatedRoute.snapshot.params['id']
  }


  onModifier(id:number){

    const details:Details={
    intervenant: this.nouvelintervenant,
    endroit: this.nouvelendroit,
    prerequis: this.nouvelprerequis
  };

    const nouvelleActivite:Activite=new Activite (
      this.ancienid, 
      this.nouveauTitre,
      this.nouvelleimage,
      this.nblikes,
      this.dispo,
      this.nouvelledate,
      [details]
   );
    this.activiteService.updateActivite(nouvelleActivite,id).subscribe(
      ()=>{
      let resultat=this.lesactivites.find(elt=>{elt.id==this.ancienid})
    if(resultat!=undefined){
      resultat=nouvelleActivite
    }
    else{
      alert("l'activité à modifier n'existe pas !")
    }
    }
    )


  }

}
