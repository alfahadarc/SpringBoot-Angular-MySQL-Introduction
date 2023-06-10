import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksuiComponent } from './components/booksui/booksui.component';
import { ShopuiComponent } from './components/shopui/shopui.component';
import { AddbookComponent } from './components/booksui/addbook/addbook.component';
import { ErrorPageComponent } from './components/shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  { path: 'book', component: BooksuiComponent },
  { path: 'shop', component: ShopuiComponent },
  {path:'addBook', component:AddbookComponent},
  {path: '**', pathMatch: 'full', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
