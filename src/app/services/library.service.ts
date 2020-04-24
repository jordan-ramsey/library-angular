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

  returnBook(data: any) {
    let url = `${this.baseUrl}/return`;
    return this.http.post(url, data, {headers: this.header}).toPromise()
  }

  addBook(data: any) {
    let url = `${this.baseUrl}/addBook`;
    return this.http.post(url, data, {headers:this.header}).toPromise()
  }

  searchBook(data: any) {
    let url = `${this.baseUrl}/search`;
    return this.http.post(url, data, {headers:this.header}).toPromise()
  }

  addMember(data: any) {
    let url = `${this.baseUrl}/addMember`;
    return this.http.post(url, data, {headers:this.header}).toPromise()
  }

  getMemberInfo(data: any) {
    let url = `${this.baseUrl}/status/${data.member_id}`;
    return this.http.get(url, {headers:this.header}).toPromise()
  }

  getFrequentCheckouts() {
    let url = `${this.baseUrl}/frequent`;
    return this.http.get(url, {headers:this.header}).toPromise()
  }

}
