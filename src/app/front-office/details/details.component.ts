import { Component } from '@angular/core';
import { Activite } from 'src/app/back-office/classes/activite';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  lesactivites!:Activite[];
  
}
