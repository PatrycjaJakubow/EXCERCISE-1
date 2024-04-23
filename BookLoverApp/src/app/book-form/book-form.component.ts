import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Output() bookAdded: EventEmitter<any> = new EventEmitter();
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      has_audio: ['', Validators.required]
    });
  }

  addBook() {
    if (this.bookForm.valid) {
      const newBook = {
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        has_audio: this.bookForm.value.has_audio
      };

      // Emit an event with the new book
      this.bookAdded.emit(newBook);

      // Reset the form after adding the book
      this.bookForm.reset();
    }
  }
}