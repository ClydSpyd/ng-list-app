import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { DaysAgoPipe } from './days-ago.pipe';
import { CreatedTextPipe } from './created-text.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ItemListComponent,
    ListItemComponent,
    DaysAgoPipe,
    CreatedTextPipe,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ItemListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
