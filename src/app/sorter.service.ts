import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SorterService {

  versa: true;
  property;
  direction = 1;

  constructor() { }


  sortItems(collection, prop) {
    this.property = prop;
    this.direction = (this.property === prop) ? this.direction * -1 : 1;
    collection.sort((a: any, b: any) => {
      let aVal;
      isNaN(a[prop]) ? aVal= a[prop].toLowerCase() : aVal = a[prop];
      let bVal;
      isNaN(b[prop]) ? bVal= b[prop].toLowerCase() : bVal = [prop];
      if (aVal === bVal) {
        return 0;
      }
      else if (aVal > bVal) {
        return this.direction * -1;
      }
      else {
        return this.direction * 1;
      }
    })
  }
  sortBy(arr, prop) {
    this.property = prop;
    this.direction = (this.property === prop) ? this.direction * -1 : 1;
    let order= this.direction;
    // return arr.sort((a, b) => a[prop] - b[prop]);
    function compareProps(a, b) {
      if (a[prop] < b[prop]) { return order * -1; }
      else if (a[prop] > b[prop]) { return order * 1; }
      return 0;
    }
    
    arr.sort(compareProps);
  }
}

