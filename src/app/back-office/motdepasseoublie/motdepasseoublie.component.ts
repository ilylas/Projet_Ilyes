import { Component } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motdepasseoublie',
  templateUrl: './motdepasseoublie.component.html',
  styleUrls: ['./motdepasseoublie.component.css']
})
export class MotdepasseoublieComponent {
  constructor(private connexionService:ConnexionService,private router:Router){}

  reset(mpdnouveau1:string,mpdnouveau2:string){
    if(mpdnouveau1!=""&&mpdnouveau2!=""&&mpdnouveau1===mpdnouveau2){
      this.connexionService.setnouveaumdp(mpdnouveau1);
      alert("Votre mot de passe est changé avec succée");
      this.router.navigate(['/menu ']);
    }
    else if(mpdnouveau1==""){
      alert("Veuillez entrer le nouveau mot de passe")
    }
    else if(mpdnouveau2==""){
      alert("Veuillez confirmer le nouveau mot de passe")
    }
    else if(mpdnouveau1==this.connexionService.getpwd()||mpdnouveau2==this.connexionService.getpwd()){
      alert("Veuillez donner un mot de passe différent de l'ancien mot de passe !")
    }
    else{
      alert("Veuillez vérifier le nouveau mot de passe")
    }
  }

  cancel(mdp1:string,mdp2:string){
    if(mdp1==""||mdp2==""||(mdp1!=""&&mdp2!="")){
      this.router.navigate(['/connexion'])
    }
  }


}
