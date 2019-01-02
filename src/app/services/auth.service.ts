import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {

    const loginInfo = { username: username, password: password };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    return this.http.post('/api/login', loginInfo, options)
        .pipe(tap((data) => {
          this.currentUser = <IUser>data['user']
        }))
        .pipe(catchError(err => {
          return of(false);
        }));

    // Dummy authentication data
    // this.currentUser = {
    //   id: 1,
    //   firstname: 'Adam',
    //   lastname: 'Smith',
    //   username: username
    // };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthStatus() {
    this.http.get('/api/currentIdentity')
        .pipe(tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        }))
        .subscribe();
  }

  updateCurrentUser(firstname, lastname) {
    this.currentUser.firstname = firstname;
    this.currentUser.lastname = lastname;

    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logOut() {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    this.currentUser = undefined;

    return this.http.post('/api/logout', {}, options);
  }

}
