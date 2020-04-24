import { LibraryService } from 'src/app/services/library.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequent-checkouts',
  templateUrl: './frequent-checkouts.component.html',
  styleUrls: ['../../../styles.css']
})
export class FrequentCheckoutsComponent implements OnInit {
  books = []
  displayedColumns: string[] = ['position', 'title', 'author', 'year'];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getFrequentCheckouts()
      .then((response: any) => {
        this.books = response.books.reverse();
      });
  }

}
