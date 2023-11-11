import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Activite } from '../classes/activite';
import { ActiviteService } from '../services/activite.service';
import { Details } from '../classes/details';

@Component({
  selector: 'app-consulteractivite',
  templateUrl: './consulteractivite.component.html',
  styleUrls: ['./consulteractivite.component.css']
})
export class ConsulteractiviteComponent {
  searchTerm!:string;
  constructor(private activiteService:ActiviteService){}
  lesactivites!:Activite[]
  details!:Details[]


  ngOnInit(){
   this.activiteService.getActivite().subscribe(
      data=>{
        this.lesactivites=data
      }
    )
  }
  
  onsupprimer(id:number) {
    this.activiteService.deleteActivite(id).subscribe(
      () => {
        if (this.lesactivites) {
          this.lesactivites = this.lesactivites.filter(elt => elt.id !== id);
        }
      }
    );
  }


}
