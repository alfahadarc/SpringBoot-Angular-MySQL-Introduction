import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Materials
import { MaterialModule } from 'src/app/material/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksuiComponent } from './components/booksui/booksui.component';
import { ShopuiComponent } from './components/shopui/shopui.component';
import { AddbookComponent } from './components/booksui/addbook/addbook.component';
import { ListbookComponent } from './components/booksui/listbook/listbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BooksuiComponent,
    ShopuiComponent,
    AddbookComponent,
    ListbookComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
