import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdText'
})
export class CreatedTextPipe implements PipeTransform {

  transform(value) {
    let days;
    days = value > 1 ? ` ${value} days ago` : 'yesterday';
    
    return value != 0 ? `added ${days}` : 'added today';
  }
}
