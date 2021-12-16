import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Author } from '../models/author';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
const httpOptionsUsingUrlEncoded = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
    providedIn: 'root'
})

export class AuthorService {
    endpoint: string = "http://localhost:8080/author";
  
    constructor(private httpClient: HttpClient){}
  
    handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
    ////
    getAuthors(): Observable<Author[]>{
      return this.httpClient.get<Author[]>(this.endpoint).pipe(
        tap(_=> console.log("Author retrieved")),
        catchError(this.handleError<Author[]>("Get author", []))
      );
    }

    createAuthor(author: Author){
      let bodyEncoded = new URLSearchParams();
      bodyEncoded.append("id", "0");
      bodyEncoded.append("name", author.name);

      const body = bodyEncoded.toString();

      console.log("hola")
      console.log(body);

      return this.httpClient.post<Author>(this.endpoint, body, httpOptionsUsingUrlEncoded);
    }

    updateAuthor(id: number, author: Author): Observable<any>{
      let bodyEncoded = new URLSearchParams();
      bodyEncoded.append("name", author.name);
      console.log(author.name);

      const body = bodyEncoded.toString();
      console.log(body);

      return this.httpClient.put<Author>(this.endpoint + "/" + id, body, httpOptionsUsingUrlEncoded);
    }

    deleteAuthor(id: number): Observable<Author>{
      return this.httpClient.delete<Author>(this.endpoint + "/" + id);
    }
}