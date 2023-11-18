import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteractiviteComponent } from './back-office/ajouteractivite/ajouteractivite.component';
import { ConnexionComponent } from './back-office/connexion/connexion.component';
import { ModifieractiviteComponent } from './back-office/modifieractivite/modifieractivite.component';
import { MotdepasseoublieComponent } from './back-office/motdepasseoublie/motdepasseoublie.component';
import { SupprimeractiviteComponent } from './back-office/supprimeractivite/supprimeractivite.component';
import { AProposDeNousComponent } from './front-office/a-propos-de-nous/a-propos-de-nous.component';
import { CreercompteComponent } from './front-office/creercompte/creercompte.component';
import { ErreurComponent } from './front-office/erreur/erreur.component';
import { ListeactivitesComponent } from './front-office/listeactivites/listeactivites.component';
import { MenuComponent } from './front-office/menu/menu.component';
import { PresentationComponent } from './front-office/presentation/presentation.component';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';
import { connexionGuard } from './back-office/connexion.guard';
import { UserComponent } from './front-office/user/user.component';
import { ConsulteractiviteComponent } from './back-office/consulteractivite/consulteractivite.component';
import { DetailsComponent } from './front-office/details/details.component';
import { ActiviteAModifierComponent } from './back-office/activite-a-modifier/activite-a-modifier.component';
import { CommentaireComponent } from './front-office/commentaire/commentaire.component';
import { AjouterCommentaireComponent } from './front-office/ajouter-commentaire/ajouter-commentaire.component';

const routes: Routes = [
  {path:'menu',title:'menu', component:MenuComponent},
  {path:'presentation',title:'presenation', component:PresentationComponent},
  {path:'listeactivites',title:'listeactivites', component:ListeactivitesComponent},
  {path:'aboutus',title:'aboutus', component:AProposDeNousComponent},
  {path:'register',title:'register', component:CreercompteComponent},
  {path:'connexion',title:'espace administrateur', component:ConnexionComponent},
  {path:'',redirectTo:'menu',pathMatch:'full'},
  {path:'user',title:'espace utilisateur', component:UserComponent},
  {path:'update/:id',title:'uptatedactivity', component:ActiviteAModifierComponent,canActivate:[connexionGuard]},
  {path:'dashboard',title:'dashboard', component:DashboardComponent,canActivate:[connexionGuard]},
  {path:'add',title:'add', component:AjouteractiviteComponent,canActivate:[connexionGuard]},
  {path:'comments/:id',title:'comments', component:CommentaireComponent},
  {path:'details/:id',title:'details', component:DetailsComponent,  
  children:[
    {path:'comments/:id',title:'les commentaires',component:CommentaireComponent},
    {path:'addcomment/:id',title:'ajouter des commentaires',component:AjouterCommentaireComponent},
    {path:'',redirectTo:'comments',pathMatch:'full'},
  ]},
  {path:'update',title:'update', component:ModifieractiviteComponent,canActivate:[connexionGuard]},
  {path:'lesactivites',title:'lesactivites', component:ConsulteractiviteComponent,canActivate:[connexionGuard]},
  {path:'forgetpwd',title:'forgetpwd', component:MotdepasseoublieComponent},
  {path:'**',title:'erreur', component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
