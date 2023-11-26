import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActiviteService } from '../services/activite.service';
import { Details } from '../classes/details';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../classes/commentaire';

@Component({
  selector: 'app-ajouteractivite',
  templateUrl: './ajouteractivite.component.html',
  styleUrls: ['./ajouteractivite.component.css']
})
export class AjouteractiviteComponent {
  lesactivites!:Activite[];

  constructor(private activiteService:ActiviteService,private formBuilder:FormBuilder,private router:Router){}

  activitesForm!:FormGroup;


  
  ngOnInit(){
    this.activitesForm=this.formBuilder.nonNullable.group({
      id:[0],
      titre:[''],
      image:[''],
      nblikes:[0],
      date:[new Date],
      disponible:[true],
      details:this.formBuilder.group({
        intervenant:[''],
        endroit:[''],
        prerequis:['']
      }),
    })
   this.activiteService.getActivite().subscribe(
      data=>{
        this.lesactivites=data
      }
    )
  }

  onSubmitForm(){
    this.activiteService.addActivite(this.activitesForm.value as Activite).subscribe(
      (data)=>{
        console.log(data)
      }
    )
    alert("Ajout effectué avec succees !")
  }

  onResetForm(){
    this.activitesForm.reset();
  }


}
