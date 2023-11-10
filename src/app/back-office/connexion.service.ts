import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService  {
  nom:string='ilyes';
  mdp:string='admin';
  autentif:boolean=false;
  constructor() {}

  public login(name:string,pwd:string):boolean{
    if((this.nom===name)&&(this.mdp===pwd)){
      localStorage.setItem('state','connected');
      this.autentif=true;
      return true;
    }
    else{
      localStorage.setItem('state','disconnected');
      return false;
    }
  }

  setnouveaumdp(pwd:string){
    this.mdp=pwd;
  }

  getpwd():string{
    return this.mdp;
  }


  
}
