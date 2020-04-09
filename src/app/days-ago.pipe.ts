import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value){
    const created = value.getTime();
    const now = new Date();

    return created;
  }

}
