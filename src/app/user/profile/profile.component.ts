import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN ,Toastr } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName;
  private lastName;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastname, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
          .subscribe(() => {
            this.router.navigate(['/events']);
            // this.toastr.success('Profile Saved');
          });
    }
  }

  logOut() {
    this.authService.logOut()
        .subscribe(() => {
          this.router.navigate(['/user/login']);
        })
  }

  validateLastName() {
    return this.lastName.untouched || this.lastName.valid;
  }

  validateFirstName() {
    return this.firstName.untouched || this.firstName.valid;
  }

}
