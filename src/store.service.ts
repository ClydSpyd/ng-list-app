import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  items = localStorage.listAppItems ? JSON.parse(localStorage.listAppItems) : [];

  addItem(item){
    this.items.push(item);
    localStorage.setItem('listAppItems', JSON.stringify(this.items));
    return this.items;
  }
  getItems() {
    return this.items;
  }
  removeItem(id){
    const index = this.items.findIndex(x => x.id == id);
    this.items.splice(index, 1);
    localStorage.setItem('listAppItems', JSON.stringify(this.items));
    return this.items;
  }

  constructor() { }
}
