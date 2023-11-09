import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { Details } from '../classes/details';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-modifieractivite',
  templateUrl: './modifieractivite.component.html',
  styleUrls: ['./modifieractivite.component.css']
})
export class ModifieractiviteComponent {
  lesactivites!:Activite[]
  constructor(private activiteService:ActiviteService){}

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
      resultat.id = this.nouvelId;
      this.ancienid = this.nouvelId;
    }
    else{
      alert("l'activité à modifier n'existe pas !")
    }
    }
    )


  }


}
