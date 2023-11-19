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
  commentaireForm!:FormGroup

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

  // ngOnInit(): void {
  //   this.commentaireForm = this.formBuilder.group({
  //     nom: [''],
  //     prenom: [''],
  //     message: ['', Validators.required],
  //   });
  // }


  // onAjouter(nom:string,prenom:string,message:string){
  //   this.activiteService.addComment(nom,prenom,message)
  // }

  // onAjouter() {
  //   if (this.commentaireForm.valid) {
  //     const nom = this.commentaireForm.get('nom')?.value;
  //     const prenom = this.commentaireForm.get('prenom')?.value;
  //     const message = this.commentaireForm.get('message')?.value;
  //     this.activiteService.addComment(nom, prenom, message);
      
  //     // Optionally, you can navigate to another route after adding the comment
  //     this.router.navigate(['/listeactivites']);
  //   } 
  //   else {
  //     alert('le commentaire nest pas envoye')
  //     // Handle form validation errors or display a message to the user
  //   }
  // }


  // addComment(c:Commentaire,id:number){
    // const activiteFormGroup = this.lesActivites.controls.find((control) => control.value.id === activiteId) as FormGroup;
    // const commentaires = activiteFormGroup.get('Commentaires') as FormArray;
    // commentaires.push(this.formBuilder.control(comment));
  // }

    // this.activiteService.addComment(this.activitesForm.value as Commentaire,Activite.id).subscribe(
    //   (data)=>{
    //     console.log(data)
    //   }
    // )

    ngSubmit(){
          // this.activiteId=this.activatedRoute.snapshot.params['id'];
    // const commentaires = this.lesCommentaires.value as string[];
    // this.activiteService.getActivite().subscribe(
    //   (activites:Activite[]) => {
    //     const activiteAModifier = activites.find(a => a.id === this.activiteId);
    //     if (activiteAModifier){
    //       activiteAModifier.comments = commentaires.map(comment => new Commentaire(this.nom,this.date,comment ));
    //       this.activiteService.updateActivite(activiteAModifier,this.activiteId).subscribe(
    //         () => {
    //           alert('Activité mise à jour avec commentaires :'+ activiteAModifier);
    //           this.router.navigate(['/listeactivites']);
    //         }
    //       )
    //     }
    //   }
    // )
    // this.activiteService.addComment(this.activitesForm.value as Commentaire[])
    }
}