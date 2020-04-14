import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:5000';

  constructor(private authService: AuthService, private http: HttpClient) { }

  checkoutBook(data: any) {
    let url = `${this.baseUrl}/checkout`;
    data.l_id = this.authService.getCurrentUser();
    return this.http.post(url, data, {headers: this.header}).toPromise()
  }

  addBook(data: any) {
    let url = `${this.baseUrl}/addBook`;
    return this.http.post(url, data, {headers:this.header}).toPromise()
  }
}
