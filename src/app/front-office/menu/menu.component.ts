import { Component, OnInit } from '@angular/core';
import { Activite } from 'src/app/back-office/classes/activite';
import { ActiviteService } from 'src/app/back-office/services/activite.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  nblikes:number=0;
  showlist:boolean=false;
  selectedOption!:string;

  constructor(private activiteService: ActiviteService) {}

  getnblikes(): number {
    return this.activiteService.getTotalLikes();
  }


  calculernblike(): void {
    if(!this.activiteService.hasUserLiked()){
    this.activiteService.incrementLikes();
    this.nblikes=1;
    }
    else{
      alert("Vous avez déja fait un like ! \nMerci \\{^_^}/")
    }
    this.activiteService.likedmenu=true


    
  }

  ngOnInit():void{
    this.nblikes=this.activiteService.getTotalLikes();
    if(!this.activiteService.hasUserLiked())
      this.nblikes=0;
    console.log(this.nblikes)
  }

  afficher(){
    if(!this.showlist){
      this.showlist=true;
    }
    else{
      this.showlist=false
    }
  }
  
}
