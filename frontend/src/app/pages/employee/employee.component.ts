import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  pageSize = 10;

  public books: Array<Book> = [];
  public authors: Array<Author> = [];

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
    
    if(localStorage.getItem('rol') != 'EMPLOYEE'){
      window.location.assign('/');
    }

    this.loadInfo();
  }

  loadInfo() {
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    })

    this.authorService.getAuthors().subscribe((response) => {
      this.authors = response;
    })
  }

  updateLibro(book: Book, name: string, author: string, genre: string, synopsis: string, stock: number, image: string, fk: string, e) {
    
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
      this.loadInfo();
    });

  }

  updateAutor(author: Author, name: string, e){
    
    e.preventDefault();
    const newAuthor: Author = {
      id: author.id,
      name: name
    }

    console.log(newAuthor);

    this.authorService.updateAuthor(newAuthor.id, newAuthor).subscribe(() => {
      this.loadInfo();
    });

  }

  deleteLibro(id: number) {
    if(confirm("Pulse aceptar para borrar el libro") == true){
      this.bookService.deleteLibro(id).subscribe(() => {
        this.loadInfo();
      })
    }else{

    }
    
  }

  deleteAuthor(id: number) {
    if(confirm("Pulse aceptar para borrar el autor") == true){
      this.authorService.deleteAuthor(id).subscribe(() => {
        this.loadInfo();
      })
    }else{

    }
    
  }

}
