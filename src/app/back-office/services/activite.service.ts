import { Injectable } from '@angular/core';
import { Activite } from '../classes/activite';
import { Details } from '../classes/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL="http://localhost:3000/activites"
@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  lesactivite!:Activite[];
  details!:Details[];
  activite!:Activite;
  totalLikes:number=0;

  private userHasLiked: boolean = false;

  constructor(private http:HttpClient) {}

  getActivite():Observable<Activite[]>{
    return this.http.get<Activite[]>(URL)
  }

  deleteActivite(id:number){
    return this.http.delete<Activite>(URL+"/"+id)
  }

  updateActivite(a:Activite,id:number){
    return this.http.put(URL+"/"+id,a)
  }

  addActivite(a:Activite):Observable<Activite>{
    return this.http.post<Activite>(URL,a);
  }

  getUneActivite(id:number):Observable<Activite>{
    return this.http.get<Activite>(URL+"/"+id)
  }


  updatenblikesactivite(nblikes:number){
    return nblikes++;
  }
  

  getTotalLikes(): number {
    return this.totalLikes;
  }

  setTotalLikes(likes: number): void {
    this.totalLikes = likes;
  }

  incrementLikes(){
    if(!this.userHasLiked){
    this.totalLikes++;
    this.userHasLiked = true;
    }
  }
  
  setUserLiked(){
    this.userHasLiked = true;
  }

  hasUserLiked():boolean{
    return this.userHasLiked;
  }

  // nouvelleActivite!:Activite
  // ajouterActivite(nouvelleActivite:Activite){
  //   this.nouvelleActivite=nouvelleActivite
  //   this.lesactivite.push(nouvelleActivite);
  // }

  // getnouvelactivite(){
  //   return this.nouvelleActivite;
  // }


  ajouterActivite(nouvelActivite: Activite) {
    console.log('Adding activity:', nouvelActivite);
    this.lesactivite.push(nouvelActivite);
    console.log('Activities after adding:', this.lesactivite);
  }
  
}
