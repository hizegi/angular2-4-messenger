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
    const message = new Message(form.value.content, "Max");
    this.messageService.addMessage(message)
      .subscribe(
        data => console.log(data),
        error => console.error("Error!", error)
      );
    form.resetForm();
  }

  //clear form field on click
  onClear(form: NgForm){
    form.reset();
  }

 //call messageService and subscribe to any events that get emitted
  ngOnInit(){
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => this.message = message
    )
  }
}
