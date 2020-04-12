import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value) {
    //create rounded date numbers (no hours, minutes, seconds or ms)
    const then = new Date(new Date(value).getFullYear(), new Date(value).getMonth(),new Date(value).getDate()).getTime();
    const now = new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate()).getTime();

    return Math.floor((now - then) / (1000 * 60 * 60 * 24));
  }
}

