import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-supprimeractivite',
  templateUrl: './supprimeractivite.component.html',
  styleUrls: ['./supprimeractivite.component.css']
})
export class SupprimeractiviteComponent {
  lesactivites!:Activite[]
  @Output() onSupprimerEvent= new EventEmitter<number>();
  @Input() activite!: Activite;


  // version 1
  onsupprimer(id:number){ 
    this.onSupprimerEvent.emit(id);
    console.log('Supprimer event received with id:', id);
  }
  
  // version 2
  // constructor(private activiteService:ActiviteService){}
  // onsupprimerv2(id:string){
  //   this.activiteService.deleteActivite(Number(id)).subscribe(
  //     ()=>this.lesactivites=this.lesactivites.filter(elt=>elt.id!=Number(id))
  //   )
  // }
  
}




