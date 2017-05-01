import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MessageComponent } from "./message.component";
import { MessageListComponent } from "./message-list.component";
import { MessageInputComponent } from "./message-input.component";
import { MessagesComponent } from "./messages.component";
import { MessageService } from "./message.service";


//register this as module
@NgModule({
  //all components for messages only
  declarations: [
    MessagesComponent,
    MessageListComponent,
    MessageComponent,
    MessageInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [MessageService]
})
export class MessageModule {

}
