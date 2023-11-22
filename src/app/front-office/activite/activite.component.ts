import { Component, Input } from '@angular/core';
import { Activite } from 'src/app/back-office/classes/activite';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent {
  searchTerm!:string;
  constructor(private activiteService:ActiviteService){}
  @Input() activite!:Activite;
  nblikes!:number
  

  aimer(activite:Activite){
    activite.nblikes++;
    this.activiteService.updateActivite(activite,activite.id).subscribe()
  }

}
