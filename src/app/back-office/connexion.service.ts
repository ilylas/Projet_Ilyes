import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
const URL = "http://localhost:3000/donnees/1";


@Injectable({
  providedIn: 'root'
})
export class ConnexionService  {
  nom:string='ilyes';
  mdp:string='';
  autentif!:boolean;
  constructor(private http:HttpClient) {}
  
  public login(name:string,pwd:string){
    this.getMdpValue().subscribe(
      (response) => {
        let mdpValue = response.mdp;
        this.mdp=mdpValue      
        console.log(this.mdp)
      }
    )
    if((this.nom===name)&&(this.mdp===pwd)){
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
