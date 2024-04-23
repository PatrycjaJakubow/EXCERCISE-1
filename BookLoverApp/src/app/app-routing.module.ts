import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'booklist', component: BookListComponent },
  { path: 'bookform', component: BookFormComponent, canActivate: [authGuard] },
  { path: 'bookdetail', component: BookDetailsComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
