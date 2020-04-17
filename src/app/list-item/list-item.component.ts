import { Component, OnInit, Input, Output } from '@angular/core';

import { StoreService } from '../store.service';
import { EventEmitter } from'@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  queryState=false;
  complete = false;
  @Input() item;
  @Output() showDetails = new EventEmitter();

  constructor(
    private storeService: StoreService,
  ){}

  ngOnInit(): void {
  }

  onRemove(id) {
      this.storeService.removeItem(id);
      this.onQuery();
  }
  onQuery(){
    this.queryState=!this.queryState
  }
  onShow(id){
    this.showDetails.emit({bool: true, id:id})
  }
  onComplete(){
    this.complete = !this.complete;
  }
  compTxt(){
    const res = this.complete ? 'mark as incomplete' : 'mark as complete';
    return res;
  }
}
