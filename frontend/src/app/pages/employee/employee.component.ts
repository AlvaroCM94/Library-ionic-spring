import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  pageSize = 10;

  public books: Array<Book> = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    //console.log("hola holita")
    this.loadInfo();
  }

  loadInfo() {
    this.bookService.getBooks().subscribe((response) => {
      //console.log("load libro antes")
      this.books = response;
      //console.log("load libro despues")
    })
  }

updateLibro(book: Book, name: string, author: string, genre: string, synopsis: string, stock: number, image: string, fk: string, e) {
    //const 22auxFk = Number(fk);
    //console.log("Llegó aupdate libro")
    
    e.preventDefault();
    const newBook: Book = {
      id: book.id,
      name: name,
      author: author,
      genre: genre,
      synopsis: synopsis,
      stock: stock,
      image: image,
      fk_author: Number(fk)
    }

    console.log(newBook);

    this.bookService.updateLibro(newBook.id, newBook).subscribe(() => {
      // console.log("update libro antes")
      this.loadInfo();
      // console.log("update libro despues")
    });

  }

  deleteLibro(id: number) {
    this.bookService.deleteLibro(id).subscribe(() => {
      this.loadInfo();
    })
  }
}
