import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
const URL = "http://localhost:3000/donnees/1";


@Injectable({
  providedIn: 'root'
})
export class ConnexionService  {
  nom:string='ilyes';
  
  autentif!:boolean;
  constructor(private http:HttpClient) {}
  
  public login(name:string,pwd:string,jsonpass:string){
    
    if((this.nom===name)&&(jsonpass===pwd)){
      localStorage.setItem('state','connected');
      this.autentif=true;
      return true;
    }
    else{
      localStorage.setItem('state','disconnected');
      this.autentif=false;
      return false;
    }
  }


    public getMdpValue(): Observable<any> {
    return this.http.get<{mdp:string}>(URL);
  }


  public getpwd(pwd:string):Observable<string[]>{
    return this.http.get<string[]>(URL+"?mdp="+pwd);
  }


  public updatepwd(newpwd:string){
    const body = { mdp: newpwd };
    return this.http.put(URL,body)
  }

  getUserByName(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${URL}?nom=${nom}`);
  }
  
  
}
