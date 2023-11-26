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
      this.connexionService.updatepwd(mpdnouveau1).subscribe(
        ()=>{
          this.connexionService.getMdpValue().subscribe(
            (response)=>{
              mpdnouveau1=response.mdp;
              mpdnouveau2=response.mdp;
              console.log(mpdnouveau1)
             alert(mpdnouveau2)

            }
          )
        }
      );
    }
    else if(mpdnouveau1==""){
      alert("Veuillez entrer le nouveau mot de passe")
    }
    else if(mpdnouveau2==""){
      alert("Veuillez confirmer le nouveau mot de passe")
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
