import { LibraryService } from 'src/app/services/library.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['../../../../styles.css']
})
export class MemberInfoComponent implements OnInit {
  @ViewChild('memberId', { static: true }) memberId: ElementRef;
  @ViewChild('table', { static: false }) matTable: MatTable<any>;


  loanDisplayedColumns: string[] = ['isbn','bookId', 'title', 'author', 'year'];
  fineDisplayedColumns: string[] = ['loan', 'amount', 'actions'];

  loans = [];
  fines = [];
  member = null;

  data = {
    member_id: null
  }
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  getMemberInfo() {
    this.libraryService.getMemberInfo(this.data) 
      .then((response: any) => {
        this.member = response.member;
        this.loans = response.loans;
        this.fines = response.fines;
  
        this.memberId.nativeElement.value = '';
      });
  }

  payFine(id: string) {
    let data = {
      l_id: id
    }

    this.libraryService.payFine(data) 
      .then((response) => {
        this.fines.forEach(fine => {
          if (fine.loan === id) {
            let indexToRemove = this.fines.indexOf(fine);
            this.fines.splice(indexToRemove, 1);
            this.member.balance = this.member.balance - fine.amount;
            this.matTable.renderRows();
          }
        })
      })

  }

}
