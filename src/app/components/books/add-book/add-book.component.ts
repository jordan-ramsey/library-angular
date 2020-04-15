import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['../../../../styles.css']
})
export class AddBookComponent implements OnInit {
  @ViewChild('ISBN', { static: true }) ISBN: ElementRef;
  @ViewChild('author', { static: true }) author: ElementRef;
  @ViewChild('title', { static: true }) title: ElementRef;
  @ViewChild('year', { static: true }) year: ElementRef;
  @ViewChild('pages', { static: true }) pages: ElementRef;
  @ViewChild('numOfCopies', { static: true }) numOfCopies: ElementRef;

  data = {
    ISBN: null,
    author: null,
    title: null,
    year: null,
    pages: null,
    numOfCopies: null
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
    this.ISBN.nativeElement.value ='';
    this.author.nativeElement.value ='';
    this.title.nativeElement.value ='';
    this.year.nativeElement.value ='';
    this.pages.nativeElement.value ='';
    this.numOfCopies.nativeElement.value ='';
  }
}
