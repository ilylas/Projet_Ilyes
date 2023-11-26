import { Commentaire } from "./commentaire";
import { Details } from "./details";

export class Activite {
    public id: number;
    public titre: string;
    public image: string;
    public nblikes: number;
    public disponible: boolean;
    public date: Date;
    public details: Details[];
    public comments?: Commentaire[]
    public nbdemandes?:number

  
    constructor(id: number, titre: string, image: string, nblikes: number, disponible: boolean, date: Date, details: Details[],nbdemandes?:number,comments?:Commentaire[]) {
      this.id = id;
      this.titre = titre;
      this.image = image;
      this.nblikes = nblikes;
      this.disponible = disponible;
      this.date = date;
      this.details = details;
      this.nbdemandes=nbdemandes;
      this.comments=comments;
    }
}
