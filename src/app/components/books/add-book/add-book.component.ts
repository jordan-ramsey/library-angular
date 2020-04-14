import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  data = {
    b_id: null,
    m_id: null,
    l_id: null
  }
  constructor(private libraryService: LibraryService){}
  ngOnInit() {
  }

  addBook() {
    this.libraryService.checkoutBook(this.data)
      .then((response) => {
        this.clearInputs();
      });
  }

}
