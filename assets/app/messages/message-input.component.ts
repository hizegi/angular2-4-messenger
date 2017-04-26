import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{
  message: Message;

  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm){
    if (this.message){
      //Edit
      //this.message is the global array of messages, not changing a copy, changing an actual message
      this.message.content = form.value.content;
      this.messageService.updateMessage(this.message)
        .subscribe(
          result => console.log(result)
        )
      //clear form
      this.message = null;
    } else {
      //Creating
      const message = new Message(form.value.content, "Max");
      this.messageService.addMessage(message)
        .subscribe(
          data => console.log(data),
          error => console.error("Error!", error)
        );
      }
    form.resetForm();
  }

  //clear form field on click
  onClear(form: NgForm){
    this.message = null;
    form.reset();
  }

 //call messageService and subscribe to any events that get emitted
  ngOnInit(){
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => this.message = message
    )
  }
}
