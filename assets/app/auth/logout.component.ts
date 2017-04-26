import { Component } from "@angular/core";

@Component({
  selector: 'app-logout',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onLogout()">Log out</button>
    </div>
  `
})
export class LogoutComponent{

}
