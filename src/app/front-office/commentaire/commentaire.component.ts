import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activite } from 'src/app/back-office/classes/activite';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{
  @Input() activiteId!: number;
  activite!:Activite;
  identifiant!:number
  constructor(private activiteService:ActiviteService,private activatedRoute:ActivatedRoute){}

  
  ngOnInit(){
    this.identifiant=this.activatedRoute.snapshot.params['id']
    this.activiteService.getUneActivite(this.identifiant).subscribe(
       (data)=>{
         this.activite=data
       }
     )
  }
}
