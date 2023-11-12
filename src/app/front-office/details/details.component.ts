import { Component, OnInit } from '@angular/core';
import { Activite } from 'src/app/back-office/classes/activite';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  lesactivites!:Activite[];

  constructor(private activiteService:ActiviteService){}

  ngOnInit(){
    this.activiteService.getActivite().subscribe(
       data=>{
         this.lesactivites=data
       }
     )
   }
}
