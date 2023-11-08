import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService  {
  nom:string='ilyes';
  mdp:string='123';
  constructor() {}

  public login(name:string,pwd:string):boolean{
    if((this.nom===name)&&(this.mdp===pwd)){
      localStorage.setItem('state','connected');
      return true;
    }
    else{
      localStorage.setItem('state','disconnected');
      alert("Donner votre nom et votre mot de passe")
      return false;
    }
  }

  getnouveaumdp(pwd:string){
    this.mdp=pwd;
  }

  
}
