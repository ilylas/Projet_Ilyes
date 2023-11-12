import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(private connexionService:ConnexionService){}

  public logout(){
    localStorage.removeItem('state');
    this.connexionService.autentif=false;
  }
}
