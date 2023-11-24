import { Component } from '@angular/core';
import { Activite } from '../classes/activite';
import { Details } from '../classes/details';
import { ActiviteService } from '../services/activite.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifieractivite',
  templateUrl: './modifieractivite.component.html',
  styleUrls: ['./modifieractivite.component.css']
})
export class ModifieractiviteComponent {
  lesactivites!:Activite[]
  activitesForm!:FormGroup;
  constructor(private activiteService:ActiviteService,private formBuilder:FormBuilder,private router:Router){}

  

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

  // ancienid!: number;
  // // nouvelId!: number;
  // nouveauTitre!: string;
  // nouvelleimage!: string;
  // nouveaunblikes!:number;
  // dispo!:boolean;
  // nouvelledate!:Date;
  // nouvelintervenant!:string;
  // nouvelendroit!:string;
  // nouvelprerequis!:string;


  // onModifier(id:number){
  //   const details:Details=new Details(
  //     this.nouvelintervenant,
  //     this.nouvelendroit,
  //    this.nouvelprerequis
  //   )
 

  //   const nouvelleActivite:Activite =new Activite  (
  //     this.ancienid,
  //     this.nouveauTitre,
  //     this.nouvelleimage,
  //     this.nouveaunblikes,
  //     this.dispo,
  //     this.nouvelledate,
  //     [details]
  //   )     

  //   // let I=this.lesactivites.findIndex(elt=>elt.titre==this.nouveauTitre)
  //   this.activiteService.updateActivite(nouvelleActivite,id).subscribe(
  //     ()=>{
  //       let result=this.lesactivites.find(elt=>elt.id==this.ancienid);
  //   if(result!=undefined){
  //     result=nouvelleActivite
  //   }
  //   }
  //   )
  //   if(this.ancienid==0){
  //     alert("l'activité à modifier nexiste pas !");
  //   }
  //   else{
  //     alert("modification terminée !")
  //   }
  // }

  

  


}
