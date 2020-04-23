import { LibraryService } from 'src/app/services/library.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../../../styles.css']
})
export class SearchComponent implements OnInit {
  public books = []

  public data = {
    title: null
  }

  displayedColumns: string[] = ['title', 'author', 'year'];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  onKeyUp(event) {
    this.data.title = event.target.value;
    if (this.data.title === '') {
      this.books = []
    } else {
      this.libraryService.searchBook(this.data)
      .then((response: any) => {
        this.books = response.books;
      });
    }
  }

}
