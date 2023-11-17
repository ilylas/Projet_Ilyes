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
  // nouvelId!: number;
  nouveauTitre!: string;
  nouvelleimage!: string;
  nouveaunblikes!:number;
  dispo!:boolean;
  nouvelledate!:Date;
  nouvelintervenant!:string;
  nouvelendroit!:string;
  nouvelprerequis!:string;


  onModifier(id:number){
    const details:Details=new Details(
      this.nouvelintervenant,
      this.nouvelendroit,
     this.nouvelprerequis
    )
 

    const nouvelleActivite:Activite =new Activite  (
      this.ancienid,
      this.nouveauTitre,
      this.nouvelleimage,
      this.nouveaunblikes,
      this.dispo,
      this.nouvelledate,
      [details]
    )     

    // let I=this.lesactivites.findIndex(elt=>elt.titre==this.nouveauTitre)
    this.activiteService.updateActivite(nouvelleActivite,id).subscribe(
      ()=>{
        let result=this.lesactivites.find(elt=>elt.id==this.ancienid);
    if(result!=undefined){
      result=nouvelleActivite
    }
    }
    )
    if(this.ancienid==0){
      alert("l'activité à modifier nexiste pas !");
    }
    else{
      alert("modification terminée !")
    }
  }


  


}
