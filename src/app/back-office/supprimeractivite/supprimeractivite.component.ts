import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-supprimeractivite',
  templateUrl: './supprimeractivite.component.html',
  styleUrls: ['./supprimeractivite.component.css']
})
export class SupprimeractiviteComponent {
  lesactivites!:Activite[]

  constructor(private activiteService:ActiviteService){}

  // onsupprimer(id:string){
  //   this.activiteService.deleteActivite(Number(id)).subscribe(
  //     ()=>this.lesactivites=this.lesactivites.filter(elt=>elt.id!=Number(id))
  //   )
  // }

  onsupprimer(id: string) {
    this.activiteService.deleteActivite(Number(id)).subscribe(
      () => {
        // Vérifiez si lesactivites est défini avant de filtrer
        if (this.lesactivites) {
          this.lesactivites = this.lesactivites.filter(elt => elt.id !== Number(id));
        }
      }
    );
  }
  
}
