import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../shared/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = environment.apiUrl;

  constructor(private http :HttpClient) { }

  getBooks() {
    return this.http.get<Book>(this.baseUrl + 'books');
  }

  getBookDetails(id: number) {
    return this.http.get<Book>(this.baseUrl + 'books/' + id);
  }
}
