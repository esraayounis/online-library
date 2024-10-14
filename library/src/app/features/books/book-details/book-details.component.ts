import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../../core/services/books.service';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.sass'
})
export class BookDetailsComponent {
  book!:Book;

  constructor(private bookService :BooksService,private activatedRoute :ActivatedRoute ) { }

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;
    this.bookService.getBookDetails(+id).subscribe({
      next: res => {
        this.book = res;
      },
      error: error => console.log(error)
    })
  }

}
