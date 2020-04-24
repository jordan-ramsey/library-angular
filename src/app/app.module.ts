import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CheckoutBookComponent } from './components/books/checkout-book/checkout-book.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { ReturnBookComponent } from './components/books/return-book/return-book.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { SearchComponent } from './components/search/search.component';
import { FrequentCheckoutsComponent } from './components/frequent-checkouts/frequent-checkouts.component';
import { MemberInfoComponent } from './components/members/member-info/member-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
    CheckoutBookComponent,
    ReturnBookComponent,
    AddBookComponent,
    AddMemberComponent,
    SearchComponent,
    FrequentCheckoutsComponent,
    MemberInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
