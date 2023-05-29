import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksuiComponent } from './components/booksui/booksui.component';
import { ShopuiComponent } from './components/shopui/shopui.component';
import { AddbookComponent } from './components/booksui/addbook/addbook.component';
import { ListbookComponent } from './components/booksui/listbook/listbook.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksuiComponent,
    ShopuiComponent,
    AddbookComponent,
    ListbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
