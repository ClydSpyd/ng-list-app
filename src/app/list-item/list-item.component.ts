import { Component, OnInit, Input } from '@angular/core';

import { StoreService } from '../../store.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  queryState=false;

  @Input() item;

  constructor(
    private storeService: StoreService,
  ){}

  ngOnInit(): void {
  }

  
  onRemove(id) {
      this.storeService.removeItem(id);
      this.onMouse();
  }

  onMouse(){
    this.queryState=!this.queryState
  }
}
