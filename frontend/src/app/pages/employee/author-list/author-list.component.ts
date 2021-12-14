import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {

  public authors: Array<Author> = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {}

  createAuthor(name: string, e){
    e.preventDefault();
    const newBook: Author = {
      id: 0,
      name: name
    }

    this.authorService.createAuthor(newBook).subscribe((res) => {
      console.log("mi resultado")
      console.log(res)
    });
  }

}
