import { Component } from '@angular/core';

@Component({
  selection: 'app-authentication',
  template: `
    <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
          <li routerLinkActive="active"><a [routerLink]="['signup']">Sign Up</a></li>
          <li routerLinkActive="active"><a [routerLink]="['signin']">Sign in</a></li>
          <li routerLinkActive="active"><a [routerLink]="['logout']">Log Out</a></li>
        </ul>
      </nav>
    </header>
    <div class="row spacing">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AuthenticationComponent{

}
