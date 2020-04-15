import { LibraryService } from './../../../services/library.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatSnackBar,   MatSnackBarConfig} from '@angular/material/snack-bar';


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
    
  constructor(private libraryService: LibraryService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  checkoutBook() {
    this.libraryService.checkoutBook(this.data)
      .then((response: any) => {
        if(response.status === 'success') {
          this.clearInputs();
        } else if (response.message ==='book already loaned') {
            let config: MatSnackBarConfig = new MatSnackBarConfig();
            config.duration = 4000;
            this.snackBar.open("Book is already loaned", "close", config);
        }
      });
  }
  clearInputs() {
    this.memberId.nativeElement.value ='';
    this.bookId.nativeElement.value ='';
  }
}
