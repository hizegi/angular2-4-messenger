//import the model
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService{
  private messages: Message[] = [];

  //this will emit an Message object
  messageIsEdit = new EventEmitter<Message>;

  //only able to inject services into classes which have some form of metadeta attached to them
  constructor(private http: Http) {}

  addMessage(message: Message){
    this.messages.push(message);
    const body = JSON.stringify(message);
    const headers = new Headers ({'Content-Type': 'application/json'});
    //sends up an observable, does not send a request, holds the request
    return this.http.post('http://localhost:3000/message', body, {headers: headers})
      .map((response: Response) => response.json())
     .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessages(){
    return this.http.get('/message')
      .map((response: Response) => {
        const messages = response.json().obj;

        let transformedMessages: Message[] = [];
        for (let message of messages) {
          transformedMessages.push(new Message(message.content, 'Dummy', message.id, null));
        }
        this.messages = transformedMessages;
        //subscribing to an Observable so map needs to return something
        return transformedMessages;
      })
    //  .catch((error: Response) => Observable.throw(error.json()));
  }

  //Inform the messageInputComponent that it should load this message into the input in the HTML
  //this service acts as a middleman between MessageComponent
  editMessage(message: Message){
    this.messageIsEdit.emit(message);
  }

  deleteMessage(message: Message){
    this.messages.splice(this.messages.indexOf(message), 1)
  }
}