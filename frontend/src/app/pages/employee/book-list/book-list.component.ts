import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  public books: Array<Book> = [];

  constructor(private bookService: BookService){}

  ngOnInit(){
  }

  createLibro(name: string, author: string, genre: string, synopsis: string, stock: number, image: string, fk: string){
    const newBook: Book = {
      id: 0,
      name: name,
      author: author,
      genre: genre,
      synopsis: synopsis,
      stock: stock,
      image: image,
      fk_author: Number(fk)
    }

    this.bookService.createLibro(newBook).subscribe(() => {});
  }

  

}
