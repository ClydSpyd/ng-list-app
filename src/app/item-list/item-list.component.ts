import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { StoreService } from '../../store.service';
import { ListItemComponent } from '../list-item/list-item.component'

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
    if(data.inputText)
      {
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
    } else {
      return
    }
  }

}
