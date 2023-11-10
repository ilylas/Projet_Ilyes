import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  nbtentatives:number=3;
  
  constructor(private router:Router,private connexionService:ConnexionService){}

  onauthentifier(name:string,pwd:string){
    this.connexionService.login(name,pwd);
    if(name==""||pwd==""){
      alert('Veuillez entrer vos données de connexion !');
    }
    if(this.connexionService.autentif){
      this.router.navigate(['/dashboard']);
    }
    else if(name!=""&&pwd!=""){
      this.nbtentatives--;
      alert('Vous avez entrer un mot de passe incorrect .\n Vous avez encore '+this.nbtentatives+' tentatives !');
    } 
    if(this.nbtentatives==0){
      alert('le nombres maximale de tentatives est atteint !');
      this.router.navigate(['/forgetpwd']);
    }
  }

  



}

