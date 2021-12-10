import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public books: Array<Book> = [];
  public book: Book;

  constructor(private bookService: BookService){}

  ngOnInit() {}

  loadInfo(){
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    })
  }

  findLibro(search: string, e/*, option: string*/){
    //console.log("busqueda: " + search);
    //console.log("array: " + this.books);
    this.books = [];
    e.preventDefault();
    search.trim;

    /*if(option == "name"){

    }else if(option == "author"){

    }else{

    }*/

    this.bookService.findByName(search).subscribe((response) =>{
      this.book = response;
      this.books.push(this.book);
    })
  }

}
