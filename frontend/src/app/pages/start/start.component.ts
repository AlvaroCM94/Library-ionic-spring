import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  //page = 1;
  //count = 0;
  pageSize = 1;
  pageSizes = [3, 4, 5, 6, 10];

  public books: Array<Book> = [];

  constructor(private bookService: BookService) {}

  ngOnInit(){
    const pageSize = JSON.stringify(3);
    localStorage.setItem('itemPerPage', pageSize);

    this.loadInfo();
    //this.retrieve();
  }

  loadInfo(){
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    })
  }

  pageSizeChangePageSize(e){
    //let pageSize = JSON.stringify(e);
    //localStorage.setItem('itemPerPage', pageSize);
    this.pageSize = Number(e);
  }

  /*retrieve(){
    const params = this.getRequestParams(this.page, this.pageSize);
    console.log("page2: " + this.page);
    console.log("page3: " + params.page);

    this.bookService.getAll(params)
      .subscribe(
        response => {
          const { books, totalItems } = response;
          this.books = books;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  getRequestParams(page, pageSize): any {
    let params = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  handlePageChange(event): void {
    console.log("evento: " + event);
    this.page = event;
    console.log("page1: " + this.page);
    this.retrieve();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieve();
  }*/

}
