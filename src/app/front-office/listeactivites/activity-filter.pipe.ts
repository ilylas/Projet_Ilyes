import { Pipe, PipeTransform } from '@angular/core';
import { Activite } from '../../back-office/classes/activite';

@Pipe({
  name: 'activityFilter',
})
export class ActivityFilterPipe implements PipeTransform {

  transform(activities:Activite[],searchTerm:string):Activite[] {
    if (!activities || !searchTerm){
      return activities
    }
    return activities.filter(elt=>elt.titre.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
  }
}