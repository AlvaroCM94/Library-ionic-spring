import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
const httpOptionsUsingUrlEncoded = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
    providedIn: 'root'
})

export class UserService {
    endpoint: string = "http://localhost:8080/user";
  
    constructor(private httpClient: HttpClient){}
  
    handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    getUserByName(){
      
    }

    createUser(user: User){
      let bodyEncoded = new URLSearchParams();
      bodyEncoded.append("name", user.name);
      bodyEncoded.append("email", user.email);
      bodyEncoded.append("password", user.password);
      bodyEncoded.append("rol", user.rol);

      const body = bodyEncoded.toString();

      return this.httpClient.post<User>(this.endpoint, body, httpOptionsUsingUrlEncoded);
    }
    
  }