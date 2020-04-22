import { LibraryService } from 'src/app/services/library.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['../../../../styles.css']
})
export class ReturnBookComponent implements OnInit {
  @ViewChild('bookId', { static: true }) bookId: ElementRef;

  data = {
    bi_id: null
  }

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  returnBook() {
    this.libraryService.returnBook(this.data)
      .then((response: any) => {
        if(response.status === 'success') {
          this.clearInputs();
        } 
      });
  }
  clearInputs() {
    this.bookId.nativeElement.value = '';
  }

}
