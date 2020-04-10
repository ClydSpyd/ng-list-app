import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdText'
})
export class CreatedTextPipe implements PipeTransform {

  transform(value) {
    let days;
    days = value > 1 ? ` ${value} days ago` : 'yesterday';
    if (value == 'today') {return 'today'} 
    else 
    {return value != 0 ? `added ${days}` : 'added today'};
  }
}
