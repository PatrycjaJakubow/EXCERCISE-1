import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.css']
})
export class ToggleViewComponent implements OnInit {
  books: any[] = [];
  isListView: boolean = true;
  titles: any[] = [];
  isEditing: boolean = false;
  editField: string = '';

  constructor(private http: HttpClient, private bookService: BookService) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/mockBooks.json').subscribe(
      (response) => {
        this.books = response.map(book => ({...book, isEditing: false}));
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );

    this.bookService.getUsers().subscribe(
      title => this.titles = title,
      error => console.error('Error fetching users:', error)
    );
  }

  startEditing(event: MouseEvent, book: any, field: string): void {
    this.isEditing = true;
    this.editField = field;
  }

  updateValue(event: any, field: string, book: any): void {
    this.isEditing = false;
    this.editField = '';
    book[field] = event.target.innerText;
    // Here you can update the book value in your database
  }

  editRow(book: any): void {
    book.isEditing = true;
  }

  saveRow(book: any): void {
    book.isEditing = false;
  }

  cancelEdit(book: any): void {
    book.isEditing = false;
  }

  editTitle(book: any): void {
    this.editRow(book);
  }

  editAuthor(book: any): void {
    this.editRow(book);
  }

  editAvailability(book: any): void {
    this.editRow(book);
  }

  showList(): void {
    this.isListView = true;
  }

  showGrid(): void {
    this.isListView = false;
  }
}
