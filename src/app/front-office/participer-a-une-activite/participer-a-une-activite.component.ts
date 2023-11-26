import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activite } from 'src/app/back-office/classes/activite';
import { ActiviteService } from 'src/app/back-office/services/activite.service';

@Component({
  selector: 'app-participer-a-une-activite',
  templateUrl: './participer-a-une-activite.component.html',
  styleUrls: ['./participer-a-une-activite.component.css']
})
export class ParticiperAUneActiviteComponent {
  searchTerm!:string;
  lesactivites!:Activite[];
  @Input() activite!:Activite
  nblikes!:number;
  aimermenu:boolean=false;
  Activite!:Activite

  constructor(private activiteService:ActiviteService){}

  ngOnInit(){
   this.activiteService.getActivite().subscribe(
      data=>{
        this.lesactivites=data
      }
    )
    this.aimermenu=this.activiteService.likedmenu
    this.nblikes = this.activiteService.getTotalLikes();
    this.activiteService.updatenblikesactivite(this.activite.nblikes);
    if(this.nblikes==1){
      this.aimermenu=true
    }
}

onchoisir(activite:Activite){
  activite.nbdemandes=0
  if(activite.nbdemandes)
    activite.nbdemandes++;
    this.activiteService.updateActivite(activite,activite.id).subscribe()
    console.log(this.activite.nbdemandes)
    alert("Merci d'avoir choisi cette activité !")
}



}
