import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  public books: Array<Book> = [];

  constructor(private bookService: BookService){}

  ngOnInit(){
    this.loadInfo();
  }

  loadInfo(){
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    })
  }

  updateLibro(book: Book, name: string, author: string, genre: string, synopsis: string, stock: number, image: string, fk: string){
    const auxFk = Number(fk);
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
    
    this.bookService.updateLibro(newBook.id, newBook).subscribe(() => {
      this.loadInfo();
    });
    
  }

  deleteLibro(id: number){
    this.bookService.deleteLibro(id).subscribe(() =>{
      this.loadInfo();
    })
  }
}
