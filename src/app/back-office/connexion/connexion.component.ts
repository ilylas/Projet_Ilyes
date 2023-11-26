import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent{

  nbtentatives:number=3;
  
  constructor(private router:Router,private connexionService:ConnexionService,private fb:FormBuilder){}

  loginForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('ilyes')]],
    mdp:['', [Validators.required,Validators.pattern('admin')]],
  })

  public get nom() {
    return this.loginForm.get('name');
  }
  public get password() { 
    return this.loginForm.get('mdp'); 
  }

// version 1
  onauthentifier(name:string,pwd:string){
    this.connexionService.login(name,pwd);
    if(name==""||pwd==""){
      alert('Veuillez entrer vos données de connexion !');
    }
    else{
      if(!this.connexionService.autentif){
        this.nbtentatives--;
        alert('Vous avez '+this.nbtentatives+' tentatives pour la prochaine fois si vous entrez des données incorrects !');
      
      if(this.nbtentatives==0){
        alert('le nombres maximale de tentatives est atteint !\nVeuillez changer votre mot de passe ou reassayer ultérierement');
        this.router.navigate(['/forgetpwd']);
      }
    }
      else{
        this.router.navigate(['/dashboard']);
      }
    }
  }

  }