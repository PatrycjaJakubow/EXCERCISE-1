import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'https://wolnelektury.pl/api/books/';
  apiUrls = 'assets/mockBooks.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBooks(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/books`, post);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrls).pipe(
      map(titles => titles.map(title => ({ ...title, title: title.title.toUpperCase() }))),
      map(titles => titles.map(author => ({ ...author, author: author.author.toUpperCase() }))),
    );
  }
}