import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent{
  myForm: FormGroup;

  //inject auth service (already set up in Providers in app.module)
  //inject router
  constructor(private authService: AuthService, private router: Router){}

  onSubmit(){
    //create new user
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService.signin(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          //redirect to /messages
          this.router.navigateByUrl('/');
        },
        error => console.log(error);
      );
    this.myForm.reset();
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, Validators.required),
    });
  }
}
