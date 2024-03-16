import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrl: './toggle-view.component.css'
})
export class ToggleViewComponent implements OnInit {

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
