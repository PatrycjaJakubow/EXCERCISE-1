import { TuiRootModule, TuiAlertModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import { RandomColorDirective } from './random-color.directive';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";



import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookDetailsComponent,
    ToggleViewComponent,
    RandomColorDirective,
    BookFormComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiAlertModule,
      MatInputModule,
      FormsModule,

      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatListModule,
      MatTableModule
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
