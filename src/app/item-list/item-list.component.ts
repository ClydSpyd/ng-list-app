import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { StoreService } from '../store.service';
import { SorterService } from '../sorter.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
  items;
  itemPass;
  showDetails;
  addItemInput;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private sorterService: SorterService,
  ) {
    this.addItemInput = this.formBuilder.group({
      inputText: '',
    });
  }

  ngOnInit() {
    this.items = this.storeService.getItems();
    this.showDetails = false;
  }

  onSubmit(data) {
    if (data.inputText) {
      const item = {
        text: data.inputText,
        created: new Date().getTime(),
        complete: false,
        id: new Date().getTime()
      }
      this.storeService.addItem(item);
      this.addItemInput.reset();
    }
  }

  onRemove(id) {
    var r = confirm("remove item from list?");
    if (r == true) {
      this.storeService.removeItem(id)
    } else { return }
  }

  onClear() {
    var r = confirm("remove all items?");
    if (r == true) {
      this.storeService.removeAll()
    } else { return }
  }

  onSort(prop) {
    this.sorterService.sortBy(this.items, prop)
  }

  onShowDetails(data) {
    this.itemPass = this.storeService.getItem(data.id);
    console.log(this.itemPass);
    this.showDetails = data.bool;
  }
  test(){
    const res = this.showDetails ? 'hemlo' : 'hai';
    return res;
  }
}
