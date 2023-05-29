import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksuiComponent } from './components/booksui/booksui.component';
import { ShopuiComponent } from './components/shopui/shopui.component';

const routes: Routes = [
  { path: 'book', component: BooksuiComponent },
  { path: 'shop', component: ShopuiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
