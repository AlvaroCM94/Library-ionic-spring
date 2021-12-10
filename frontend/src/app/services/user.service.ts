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

const cred = {
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

    getUserByEmail(email: string): Observable<User>{
      //console.log(this.endpoint + "/byemail/" + email);
      return this.httpClient.get<User>(this.endpoint + "/byemail/" + encodeURI(email));
    }

    getUserByPassword(password: string): Observable<User>{
      //console.log(this.endpoint + "/byemail/" + password);
      return this.httpClient.get<User>(this.endpoint + "/bypassword/" + encodeURI(password));
    }

    createUser(user: User){
      let bodyEncoded = new URLSearchParams();
      bodyEncoded.append("name", user.name);
      bodyEncoded.append("email", user.email);
      bodyEncoded.append("password", user.password);
      bodyEncoded.append("rol", user.rol);

      const body = bodyEncoded.toString();
      console.log("body: " + body);

      return this.httpClient.post<User>(this.endpoint, body, httpOptionsUsingUrlEncoded);
    }
    
  }