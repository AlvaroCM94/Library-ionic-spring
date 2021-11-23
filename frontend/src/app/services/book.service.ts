import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Book } from '../models/book';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
const httpOptionsUsingUrlEncoded = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
    providedIn: 'root'
})

export class BookService {
    endpoint: string = "http://localhost:8080/book";
  
    constructor(private httpClient: HttpClient){}
  
    handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
    
    getBooks(): Observable<Book[]>{
      return this.httpClient.get<Book[]>(this.endpoint).pipe(
        tap(_=> console.log("Book retrieved")),
        catchError(this.handleError<Book[]>("Get book", []))
      );
    }

    getAll(params): Observable<any> {
      console.log("parametros: " + params);
      return this.httpClient.get(this.endpoint, { params });
    }

    createLibro(book: Book){
      let bodyEncoded = new URLSearchParams();
      bodyEncoded.append("name", book.name);
      bodyEncoded.append("author", book.author);
      bodyEncoded.append("genre", book.genre);
      bodyEncoded.append("synopsis", book.synopsis);
      bodyEncoded.append("stock", book.stock.toString());
      bodyEncoded.append("image", book.image);
      bodyEncoded.append("fk_author", book.fk_author.toString());

      const body = bodyEncoded.toString();

      return this.httpClient.post<Book>(this.endpoint, body, httpOptionsUsingUrlEncoded);
    }

    updateLibro(id: number, book: Book): Observable<any>{
      let bodyEncoded = new URLSearchParams();
      bodyEncoded.append("name", book.name);
      bodyEncoded.append("author", book.author);
      bodyEncoded.append("genre", book.genre);
      bodyEncoded.append("synopsis", book.synopsis);
      bodyEncoded.append("stock", book.stock.toString());
      bodyEncoded.append("image", book.image);
      bodyEncoded.append("fk_author", book.fk_author.toString());

      const body = bodyEncoded.toString();

      return this.httpClient.put<Book>(this.endpoint + "/" + id, body, httpOptionsUsingUrlEncoded);
    }

    deleteLibro(id: number): Observable<Book>{
      return this.httpClient.delete<Book>(this.endpoint + "/" + id);
    }

    findByName(name: string): Observable<Book>{
      return this.httpClient.get<Book>(this.endpoint + "/byname/" + name);
    }
  }