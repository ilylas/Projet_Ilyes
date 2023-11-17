import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from '../../back-office/classes/commentaire';
import { ActiviteService } from '../../back-office/services/activite.service';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{

  activitesForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.activitesForm=this.formBuilder.nonNullable.group({
      Commentaires:this.formBuilder.array([])
    })
  }

  public get lesCommentaires(){
    return this.activitesForm.get('Commentaires') as FormArray
  }

  onAjouter(){
    this.lesCommentaires.push(this.formBuilder.control(''))
  }
}
