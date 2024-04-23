import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  filterForm: FormGroup;
  newBook: any = null; // Variable to store the newly added book

  constructor(private http: HttpClient, private fb: FormBuilder, private bookService: BookService) {
    this.filterForm = this.fb.group({
      searchFilter: ['']
    });
  }

  ngOnInit(): void {
    // Fetch existing books from the service
    this.bookService.getBooks().subscribe(
      (response) => {
        this.books = response;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  // Handle the event emitted from book-form.component
  onBookAdded(newBook: any) {
    this.newBook = newBook; // Store the newly added book
    setTimeout(() => {
      this.books.unshift(this.newBook); // Add the new book to the beginning of the list
      this.newBook = null; // Reset the newBook variable
    }, 0);
  }
}