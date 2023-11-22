import { Injectable } from '@angular/core';
import { Activite } from '../classes/activite';
import { Details } from '../classes/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../classes/commentaire';

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


  addComment(nom:string,prenom:string,message:string){
    const newComment: Commentaire = { nom, prenom, message };
    this.activite.comments?.push(newComment);
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

  // private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={813cbb57c25fea8e26b42665abcd2200}';

  // getData(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/weather`);
  // }

  // private apiKey = '813cbb57c25fea8e26b42665abcd2200';
  // private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  
  // getWeather(city: string): Observable<any> {
  //   const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
  //   return this.http.get<any>(url);
  // }

  private apiKey = 'b270a900c92cb83e0a4454cd27c060ac';
  // private apiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';

  //https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}

  getWeather(city: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
  }
}
