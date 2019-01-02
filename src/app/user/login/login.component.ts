import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  mouseOverLogin;
  loginInvalid = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password)
        .subscribe(resp => {
          if (!resp) {
            this.loginInvalid = true;
          } else {
            this.router.navigate(['events']);
          }
        });
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
