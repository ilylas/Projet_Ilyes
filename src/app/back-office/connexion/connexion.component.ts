import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent{

  nbtentatives:number=3;
  
  constructor(private router:Router,private connexionService:ConnexionService){}

  onauthentifier(name:string,pwd:string){
    this.connexionService.login(name,pwd);
    if(name==""||pwd==""){
      alert('Veuillez entrer vos données de connexion !');
    }
    if(!this.connexionService.autentif){
      this.nbtentatives--;
      alert('Vous avez entrer des données incorrects .\nVous avez encore '+this.nbtentatives+' tentatives !');
    }
    else{
      this.router.navigate(['/dashboard']);
    }
    if(this.nbtentatives==0){
      alert('le nombres maximale de tentatives est atteint !');
      this.router.navigate(['/forgetpwd']);
    }
  }
}

