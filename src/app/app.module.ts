import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './front-office/menu/menu.component';
import { ListeactivitesComponent } from './front-office/listeactivites/listeactivites.component';
import { PresentationComponent } from './front-office/presentation/presentation.component';
import { ErreurComponent } from './front-office/erreur/erreur.component';
import { CreercompteComponent } from './front-office/creercompte/creercompte.component';
import { AProposDeNousComponent } from './front-office/a-propos-de-nous/a-propos-de-nous.component';
import { AjouteractiviteComponent } from './back-office/ajouteractivite/ajouteractivite.component';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';
import { ModifieractiviteComponent } from './back-office/modifieractivite/modifieractivite.component';
import { MotdepasseoublieComponent } from './back-office/motdepasseoublie/motdepasseoublie.component';
import { SupprimeractiviteComponent } from './back-office/supprimeractivite/supprimeractivite.component';
import { ActivityFilterPipe } from './front-office/listeactivites/activity-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionService } from './back-office/connexion.service';
import { ConnexionComponent } from './back-office/connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './front-office/user/user.component';
import { ConsulteractiviteComponent } from './back-office/consulteractivite/consulteractivite.component';
import { DetailsComponent } from './front-office/details/details.component';
import { ActiviteAModifierComponent } from './back-office/activite-a-modifier/activite-a-modifier.component';
import { CommentaireComponent } from './front-office/commentaire/commentaire.component';
import { AjouterCommentaireComponent } from './front-office/ajouter-commentaire/ajouter-commentaire.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeactivitesComponent,
    PresentationComponent,
    ErreurComponent,
    CreercompteComponent,
    AProposDeNousComponent,
    AjouteractiviteComponent,
    DashboardComponent,
    ModifieractiviteComponent,
    MotdepasseoublieComponent,
    SupprimeractiviteComponent,
    ActivityFilterPipe,
    ConnexionComponent,
    UserComponent,
    ConsulteractiviteComponent,
    DetailsComponent,
    ActiviteAModifierComponent,
    CommentaireComponent,
    AjouterCommentaireComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatBadgeModule,
    ReactiveFormsModule
  ],
  providers: [ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
