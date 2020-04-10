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

  getItem(id) {
    return this.items.find(item => item.id == id )
  }
  removeItem(id){
    const index = this.items.findIndex(x => x.id == id);
    this.items.splice(index, 1);
    localStorage.setItem('listAppItems', JSON.stringify(this.items));
    return this.items;
  }
  removeAll(){
    this.items.splice(0)
    localStorage.setItem('listAppItems', JSON.stringify(this.items));
    return this.items;    
  }
  constructor() { }
}
