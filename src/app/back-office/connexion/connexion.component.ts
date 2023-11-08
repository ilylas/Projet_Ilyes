import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  
  constructor(private router:Router,private connexionService:ConnexionService){}
  onauthentifier(name:string,pwd:string){
    this.connexionService.login(name,pwd);
    this.router.navigate(['/dashboard']);
  }

  



}

