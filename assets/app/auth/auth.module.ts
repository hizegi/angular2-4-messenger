import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LogoutComponent } from "./logout.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";

@NgModule({
  declarations: [
    LogoutComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthModule{

}
