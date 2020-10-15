import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    getLoggedUsername() {
        const loggedUsername = localStorage.getItem('username');
        return loggedUsername;
    }
}


