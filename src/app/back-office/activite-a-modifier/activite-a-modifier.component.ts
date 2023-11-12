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
  nouvelId!: number;
  nouveauTitre!: string;
  nouvelleimage!: string;
  nouvelleevaluation!:number;
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

    const nouvelleActivite: Activite = {
      id: this.nouvelId, 
      titre: this.nouveauTitre,
      image: this.nouvelleimage,
      evaluation: this.nouvelleevaluation,
      disponible: this.dispo,
      date:this.nouvelledate,
      details:[details]
    };
    this.activiteService.updateActivite(nouvelleActivite,id).subscribe(
      ()=>{
      let resultat=this.lesactivites.find(elt=>{elt.id==this.ancienid})
    if(resultat!=undefined){
      resultat=nouvelleActivite
      this.ancienid=nouvelleActivite.id;
    }
    else{
      alert("l'activité à modifier n'existe pas !")
    }
    }
    )


  }

}
