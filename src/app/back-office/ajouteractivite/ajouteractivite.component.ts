import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActiviteService } from '../services/activite.service';
import { Details } from '../classes/details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouteractivite',
  templateUrl: './ajouteractivite.component.html',
  styleUrls: ['./ajouteractivite.component.css']
})
export class AjouteractiviteComponent {
  lesactivites!:Activite[];

  constructor(private activiteService:ActiviteService){}

  nouvelId!: number;
  nouveauTitre!: string;
  nouvelleimage!: string;
  nouveaunblikes!:number;
  dispo!:boolean;
  nouvelledate!:Date;
  nouvelintervenant!:string;
  nouvelendroit!:string;
  nouvelprerequis!:string;

  onajouter(){
    const details=new Details(
    this.nouvelintervenant,
    this.nouvelendroit,
    this.nouvelprerequis
    );

    const nouvelleActivite=new Activite(
      this.nouvelId, 
      this.nouveauTitre,
      this.nouvelleimage,
       this.nouveaunblikes,
       this.dispo,
      this.nouvelledate,
      [details]
    );
    this.activiteService.addActivite(nouvelleActivite).subscribe(
      (data)=>{
        this.lesactivites.push(data)
      }
    )
    alert("Ajout effectué avec succees !")
  }


//   constructor(private activiteService:ActiviteService){
//     this.lesactivites=this.activiteService.getActivite();
//   }

// ajouter() {
//   const details:Details={
//     intervenant: this.nouvelintervenant,
//     endroit: this.nouvelendroit,
//     prerequis: this.nouvelprerequis};
//   const nouvelleActivite: Activite = {
//     id: this.nouvelId, 
//     titre: this.nouveauTitre,
//     image: this.nouvelleimage,
//     evaluation: this.nouvelleevaluation,
//     disponible: this.dispo,
//     date:this.nouvelledate,
//     details:[details]
//   };
//   // this.activiteService.ajouterActivite(nouvelleActivite);
//   this.lesactivites.push(nouvelleActivite);
// }

 
//   ajouter(id:string,titre:string,image: string,evaluation:string,disponible: string,date: string,intervenant:string,endroit:string,prerequis:string){

//   let details = new Details(intervenant, endroit, prerequis);
//   let disponibleBoolean = disponible==='true' ;
//   let dateObject = new Date(date);

//   this.activiteService.getnouvelactivite(parseInt(id), titre, image,parseInt(evaluation),disponibleBoolean, dateObject, [details]);
// }


}
