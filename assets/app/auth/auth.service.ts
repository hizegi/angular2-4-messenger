import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService{
  constructor(private http: Http, private errorService: ErrorService){}

  //return an observable using http service
  signup(user: User){
    var body = JSON.stringify(user);
    var headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post(`/user`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
         this.errorService.handleError(error.json());
         return Observable.throw(error.json());
      });  }

  //return an observable using http service
  signin(user: User){
    var body = JSON.stringify(user);
    var headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post(`/user/signin`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
         this.errorService.handleError(error.json());
         return Observable.throw(error.json());
      });  }

  //authentication methods here
  //clear localStorage on logout
  logout(){
    localStorage.clear();
  }
  //see if token exists (is logged in)
  isLoggedIn(){
    return localStorage.getItem('token') !== null;
    // return tokenNotExpired();
  }
}
