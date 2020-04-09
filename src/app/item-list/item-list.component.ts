import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { StoreService } from '../../store.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  addItemInput;
  items;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
  ) {
    this.addItemInput = this.formBuilder.group({
      inputText: '',
    });
  }

  ngOnInit() {
    this.items = this.storeService.getItems();
  }

  onSubmit(data) {
    const item = {
      text: data.inputText,
      created: new Date(),
      complete: false,
      id: new Date().getTime()
    }
    this.storeService.addItem(item);
    this.addItemInput.reset();
  }

  onRemove(id) {
    this.storeService.removeItem(id)
  }
}
