import { Component } from "@angular/core";
import { Error } from "./error.model";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [`
    .backdrop{
      background-color: rgba(0,0,0,0.6);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
    }
    `]
})
export class ErrorComponent{
  error: Error;
  display = 'none';

  onErrorHandled(){
    this.display = 'none';
  }
}
