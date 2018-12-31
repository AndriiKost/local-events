import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      firstname: 'Adam',
      lastname: 'Smith',
      username: username
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(firstname, lastname) {
    this.currentUser.firstname = firstname;
    this.currentUser.lastname = lastname;
  }
  constructor() { }
}
