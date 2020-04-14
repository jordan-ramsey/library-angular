import { LibraryService } from './../../../services/library.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-checkout-book',
  templateUrl: './checkout-book.component.html',
  styleUrls: ['../../../../styles.css']
})
export class CheckoutBookComponent implements OnInit {
  @ViewChild('memberId', { static: true }) memberId: ElementRef;
  @ViewChild('bookId', { static: true }) bookId: ElementRef;

    data = {
      b_id: null,
      m_id: null,
      l_id: null
    }
    
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  checkoutBook() {
    this.libraryService.checkoutBook(this.data)
      .then((response) => {
        this.clearInputs();
      });
  }
  clearInputs() {
    this.memberId.nativeElement.value ='';
    this.bookId.nativeElement.value ='';
  }
}
