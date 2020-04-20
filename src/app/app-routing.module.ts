import { AddBookComponent } from './components/books/add-book/add-book.component';
import { CheckoutBookComponent } from './components/books/checkout-book/checkout-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { ReturnComponent } from './components/books/return/return.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  { path: 'dashboard', component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'checkout', pathMatch: 'full' },
      { path: 'checkout', component: CheckoutBookComponent },
      {path: 'addMember', component: AddMemberComponent},
      { path: 'add', component: AddBookComponent },
      {path: 'return', component: ReturnComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
