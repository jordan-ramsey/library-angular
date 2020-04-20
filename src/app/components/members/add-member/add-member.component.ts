import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['../../../../styles.css']
})
export class AddMemberComponent implements OnInit {
  @ViewChild('name', { static: true }) name: ElementRef;
  @ViewChild('phone', { static: true }) phone: ElementRef;
  @ViewChild('email', { static: true }) email: ElementRef;
  @ViewChild('balance', { static: true }) balance: ElementRef;

  data = {
    name: null,
    phone: null,
    email: null,
    balance: null,
  }

  constructor(private libraryService: LibraryService){}
  ngOnInit() {
  }

  addMember() {
    this.libraryService.addMember(this.data)
      .then((response) => {
        this.clearInputs();
      });
  }
  clearInputs() {
    this.name.nativeElement.value ='';
    this.phone.nativeElement.value ='';
    this.email.nativeElement.value ='';
    this.balance.nativeElement.value ='';
  }

}
