import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { ActiviteService } from '../services/activite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifieractivite',
  templateUrl: './modifieractivite.component.html',
  styleUrls: ['./modifieractivite.component.css']
})
export class ModifieractiviteComponent {
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
