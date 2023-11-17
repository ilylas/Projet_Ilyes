import { Component, Input } from '@angular/core';
import { Commentaire } from '../back-office/classes/commentaire';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input() comment!:Commentaire;
}
