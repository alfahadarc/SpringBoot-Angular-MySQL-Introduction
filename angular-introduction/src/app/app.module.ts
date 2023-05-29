import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


//http client
import { HttpClientModule } from '@angular/common/http';

//Materials
import { MaterialModule } from 'src/app/material/material.module';

//toaster
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksuiComponent } from './components/booksui/booksui.component';
import { ShopuiComponent } from './components/shopui/shopui.component';
import { AddbookComponent } from './components/booksui/addbook/addbook.component';
import { ListbookComponent } from './components/booksui/listbook/listbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditbookComponent } from './components/booksui/editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksuiComponent,
    ShopuiComponent,
    AddbookComponent,
    ListbookComponent,
    EditbookComponent,
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
