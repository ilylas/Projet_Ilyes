import { Commentaire } from "./commentaire";
import { Details } from "./details";

export class Activite {
    id: number;
    titre: string;
    image: string;
    nblikes: number;
    disponible: boolean;
    date: Date;
    details: Details[];
    public comments?: Commentaire[]
  
    constructor(id: number, titre: string, image: string, nblikes: number, disponible: boolean, date: Date, details: Details[],comments?:Commentaire[]) {
      this.id = id;
      this.titre = titre;
      this.image = image;
      this.nblikes = nblikes;
      this.disponible = disponible;
      this.date = date;
      this.details = details;
      this.comments=comments;
    }
}
