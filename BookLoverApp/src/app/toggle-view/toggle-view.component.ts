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

  constructor(private http: HttpClient, private bookService: BookService) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/mockBooks.json').subscribe(
      (response) => {
        this.books = response;
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

  editRow(title: any): void {
    this.isEditing = true;
  }

  saveRow(title: any): void {
    // Save changes to the backend or update local data
    this.isEditing = false;
  }

  cancelEdit(): void {
    // Discard changes and revert to read-only mode
    this.isEditing = false;
  }

  showList(): void {
    this.isListView = true;
  }

  showGrid(): void {
    this.isListView = false;
  }
}
