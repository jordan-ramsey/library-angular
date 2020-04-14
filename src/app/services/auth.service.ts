import { RouterModule, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:5000';


  constructor(private http: HttpClient, private router: Router) { }

   login(userData: Object): any {
    var promise = new Promise((resolve, reject) => {
      let url = `${this.baseUrl}/login`
      this.http.post(url, userData, {headers: this.header}).toPromise()
      .then((response: any) => {
        if (response.status === 'success') {
          localStorage.setItem('user', JSON.stringify(response.id));
          resolve();
        } else {
          reject();
        }
      });
    });
    return promise;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn() {
    return localStorage.getItem('user') != null;
  }
}

