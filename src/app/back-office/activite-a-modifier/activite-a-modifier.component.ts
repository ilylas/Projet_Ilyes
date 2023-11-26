import { Component, OnInit } from '@angular/core';
import { Activite } from '../classes/activite';
import { Details } from '../classes/details';
import { ActiviteService } from '../services/activite.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-activite-a-modifier',
  templateUrl: './activite-a-modifier.component.html',
  styleUrls: ['./activite-a-modifier.component.css']
})
export class ActiviteAModifierComponent implements OnInit {
  lesactivites!:Activite[]
  activitesForm!:FormGroup;
  constructor(private activiteService:ActiviteService,private formBuilder:FormBuilder){}
  ngOnInit(){
    this.activitesForm=this.formBuilder.nonNullable.group({
      id:[0,[Validators.min(0),Validators.max(20)]],
      titre:['',Validators.maxLength(20)],
      image:[''],
      nblikes:[0],
      date:[new Date],
      disponible:[true],
      details:this.formBuilder.group({
        intervenant:[''],
        endroit:[''],
        prerequis:['']
      }),
      // commentaire:this.formBuilder.array([])
    })
   this.activiteService.getActivite().subscribe(
      data=>{
        this.lesactivites=data
      }
    )
  }

  public get ID(){
    return this.activitesForm.get('id');
  }

  onSubmitForm(){
    if(this.ID!=null){
      this.activiteService.updateActivite(this.activitesForm.value as Activite,Number(this.ID)).subscribe(
        (data)=>{
          console.log(data)
        }
      )
      alert("Ajout effectué avec succees !")
    }
    else{
      alert("Veuillez entrer l'ID !")
    }
  }

  onResetForm(){
    this.activitesForm.reset();
  } 
}