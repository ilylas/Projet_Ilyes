import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/back-office/classes/activite';
import { Commentaire } from 'src/app/back-office/classes/commentaire';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.css']
})
export class AjouterCommentaireComponent  {
  activite!:Activite;
  nom!:string;
  prenom!:string;
  Commentaire!:string;

  constructor(private activiteService:ActiviteService,private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private router:Router){}




  ngOnInit() {
    const activiteId = this.activatedRoute.snapshot.params['id'];
    this.activiteService.getUneActivite(activiteId).subscribe(
      (activite: Activite) => {
        this.activite = activite;
      }
    );
  }
  
  onAjouter(nom:string,prenom:string,message:string){
        const newComment: Commentaire = {nom,prenom,message};
        if (!this.activite.comments) {
          this.activite.comments = [];
        }
        if(nom!=""&&prenom!=""&&message!=""){
        this.activite.comments.push(newComment);
        this.activiteService.updateActivite(this.activite,this.activite.id).subscribe(
          () => {
            alert("Merci d'avoir commenter cette activitée !");
            this.router.navigate(['/listeactivites']);
          }
        )
        }
        else{
          alert("Veuillez remplir les données du commentaire");
        }

  }

  onReset(commentaireForm:HTMLFormElement){
      commentaireForm.reset()
    }

}