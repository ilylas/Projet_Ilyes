import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  public logout(){
    localStorage.removeItem('state');
  }
}
