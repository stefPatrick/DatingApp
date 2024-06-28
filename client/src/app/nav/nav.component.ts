import { Component, NgModule, OnInit, Signal, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

import { User } from '_models/user';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: true,
    imports: [ BsDropdownModule, FormsModule, RouterLink,RouterLinkActive,TitleCasePipe]
})

export class NavComponent implements OnInit {
  model: any = {};
  private router=inject(Router);
  private toastr= inject(ToastrService);
  currentUser =   signal<User |null>(null);
  
  
  accountService=inject(AccountService);
  ngOnInit(): void {
    

  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/members');
    

      },
      error: error => this.toastr.error(error.error)

    })



  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
   
  }
}
