import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooksService } from '../../../core/services/books.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  books:any;

  constructor(private bookService :BooksService) { }

  ngOnInit() {
   // this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe({
      next: response => this.books = response,
      error: error => console.error(error)
    })
  }

}
