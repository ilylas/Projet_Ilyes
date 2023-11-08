import { Details } from "./details";

export class Activite {
    id: number;
    titre: string;
    image: string;
    evaluation: number;
    disponible: boolean;
    date: Date;
    details: Details[];
  
    constructor(id: number, titre: string, image: string, evaluation: number, disponible: boolean, date: Date, details: Details[]) {
      this.id = id;
      this.titre = titre;
      this.image = image;
      this.evaluation = evaluation;
      this.disponible = disponible;
      this.date = date;
      this.details = details;
    }
}
