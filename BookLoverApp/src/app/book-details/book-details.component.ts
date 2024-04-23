import { Component, Input, Output, EventEmitter } from '@angular/core';

// interface Book {
//   // title: string;
//   // author: string;
//   // availability: string;
// }

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  // @Input() book!: Book;
  // @Output() updatedBook: EventEmitter<Book> = new EventEmitter<Book>();



  // onTitleChange(event: any): void {
  //   // Update the book object but don't emit the event here
  //   this.book.title = event.target.textContent;
  // }

  // onAuthorChange(event: any): void {
  //   // Update the book object but don't emit the event here
  //   this.book.author = event.target.textContent;
  // }

  // onAvailabilityChange(event: any): void {
  //   // Update the book object but don't emit the event here
  //   this.book.availability = event.target.textContent;
  // }

  // updateList(): void {
  //   // Emit the updated book when updateList is called
  //   console.log(this.book);
  //   this.updatedBook.emit(this.book);
  // }
}

