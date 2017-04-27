# Angular Messenger App

This is done through a [tutorial](https://www.udemy.com/angular-2-and-nodejs-the-practical-guide) and is a work in progress. One of the first full stack apps I've developed using Angular 2+ and had a lot of fun along the way.

## App Specs

Backend:
- Express server
- MongoDB
- Handlebars
- User authentication (bcrypt, JWT, localStorage)
- Webpack

Frontend:
- SPA
- Angular 2 (technically 4)
- Bootstrap for styling

## Angular 2 / 4 Features used:
- Typescript (duh?)
- Custom models (user, message)
- Custom services (authentication, messages)
- Routing and child routes
- Form (ReactiveFormsModule)
- Http requests with Observables

### Take aways
#### AngularJS v Angular 2
Introducing web components to Angular 2+ solves a lot of headaches that arose from AngularJS. The component based architecture keeps the structure of your app modular and maintainable. This means you can treat almost everything as a component (including directives and services).

Because Angular 2 is written in Typescript (which really is just a wrapper for ES6), there is a bit of a learning curve to learning the superset language. The pros:
  - faster, cleaner, scalable JS
  - purely object-oriented programming (woohoo!)
  - so much more I can write a whole thing on TS

#### Is it MVC?
Technically component based, the components themselves follow an MVC framework. For example, here is the MessageListComponent in `message.component.ts`:

```
import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service"

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
    <app-message
      [message]="message"
       (editClicked)="message.content = $event"
       *ngFor="let message of messages"></app-message>
    </div>
  `
})
export class MessageListComponent implements OnInit{
  constructor(private messageService: MessageService){}

  messages: Message[];

  ngOnInit(){
    this.messages = this.messageService.getMessage();
  }
}
```

####
