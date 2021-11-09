import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  public books: Array<Book> = [];

  constructor(private bookService: BookService) {}

  ngOnInit(){
    this.loadInfo();
  }

  loadInfo(){
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    })
  }

}
