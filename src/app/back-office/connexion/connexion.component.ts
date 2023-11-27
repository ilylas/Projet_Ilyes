import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  loginForm!:FormGroup;
  nbtentatives:number=3;
  mdp!:string;
  constructor(private router:Router,private connexionService:ConnexionService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.connexionService.getMdpValue().subscribe(
      (response) => {
        console.log(response.nom)
        let mdpValue = response.mdp;
        this.mdp=mdpValue;
        this.loginForm=this.fb.group({
          name:['',[Validators.required,Validators.pattern('ilyes')]],
          mdp:['', [Validators.required,Validators.pattern(this.mdp)]],
        })
      }
    )
  }


  // loginForm=this.fb.group({
  //   name:['',[Validators.required,Validators.pattern('ilyes')]],
  //   mdp:[this.mdp, [Validators.required,Validators.pattern(this.mdp)]],
  // })

  public get nom() {
    return this.loginForm.get('name');
  }
  public get password() { 
    return this.loginForm.get('mdp'); 
  }

// version 1
  onauthentifier(name:string,pwd:string){
    this.connexionService.login(name,pwd,this.mdp);
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