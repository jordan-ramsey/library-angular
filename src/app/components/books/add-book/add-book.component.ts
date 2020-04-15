import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @ViewChild('memberId', { static: true }) memberId: ElementRef;
  @ViewChild('bookId', { static: true }) bookId: ElementRef;

  data = {
    b_id: null,
    m_id: null,
    l_id: null
  }
  constructor(private libraryService: LibraryService){}
  ngOnInit() {
  }

  addBook() {
    this.libraryService.addBook(this.data)
      .then((response) => {
        this.clearInputs();
      });
  }

  clearInputs() {
    this.memberId.nativeElement.value ='';
    this.bookId.nativeElement.value ='';
  }

}
