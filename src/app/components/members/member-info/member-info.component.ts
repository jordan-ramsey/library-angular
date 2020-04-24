import { LibraryService } from 'src/app/services/library.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['../../../../styles.css']
})
export class MemberInfoComponent implements OnInit {
  @ViewChild('memberId', { static: true }) memberId: ElementRef;

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

}
