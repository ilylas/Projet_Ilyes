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
  constructor(private activiteService:ActiviteService){}
  lesactivites!:Activite[]

  ngOnInit(){
   this.activiteService.getActivite().subscribe(
      data=>{
        this.lesactivites=data
      }
    )
  }

  // nouvelleactivite=this.activiteService.getnouvelactivite()
  // ajouter(){
  //   if (this.nouvelleactivite) {
  //   this.lesactivites.push(this.nouvelleactivite);
  //     this.activiteService.ajouterActivite(this.nouvelleactivite);
  //     alert("Activitée Ajoutée ! ");
  //     // this.lesactivites[this.lesactivites.length++]=nouvelleactivite;
  //   }
  // }

  // ngOnInit(){
  //   const nouvelleactivite=this.activiteService.getnouvelactivite()
  //   if (nouvelleactivite) {
  //     this.ajouter();
  //     this.lesactivites[this.lesactivites.length++]=nouvelleactivite;
  //   }
  // }

  // ngOnInit(){
  //   const nouvelleactivite=this.activiteService.getnouvelactivite()
  //   this.lesactivites.push(nouvelleactivite)
  // }


  //  this.selectedactivity=this.lesactivites;

 
  /*
  selectedactivity!:Activite[]
  
  get SearchTerm():string{
    return this.searchTerm;
  }

  set SearchTerm(value:string){
    this.searchTerm=value;
    this.selectedactivity=this.selectactivity(value)
  }

  selectactivity(searchactivity:string){
    return this.lesactivites.filter(elt=>elt.titre.toLowerCase().indexOf(searchactivity.toLowerCase())!==-1)
  }

  constructor(private acticiteService:ActiviteService){}

*/


}
