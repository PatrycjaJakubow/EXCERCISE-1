import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = []; // Initialize as empty array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/mockBooks.json').subscribe(
      (response) => {
        this.books = response; // Assign the response to the books property
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }


}
