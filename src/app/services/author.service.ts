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
    
    // getComunidad(): Observable<Comunidad[]>{
    //   return this.httpClient.get<Comunidad[]>(this.endpoint).pipe(
    //     tap(_=> console.log("Comunidad retrieved")),
    //     catchError(this.handleError<Comunidad[]>("Get Comunidad", []))
    //   );
    // }
  }