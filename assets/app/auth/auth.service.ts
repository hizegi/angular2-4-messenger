import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class AuthService{
  constructor(private http: Http){}

  //return an observable using http service
  signup(user: User){
    var body = JSON.stringify(user);
    var headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post(`/user`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((response: Response) => console.log(response));
  }

  //return an observable using http service
  signin(user: User){
    var body = JSON.stringify(user);
    var headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post(`/user/signin`, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((response: Response) => console.log(response));
  }

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
