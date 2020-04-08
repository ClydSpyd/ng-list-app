import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  addItemInput;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.addItemInput = this.formBuilder.group({
      inputText: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data);
    this.addItemInput.reset();
  }

}
