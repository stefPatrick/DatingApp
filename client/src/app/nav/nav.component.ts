import { Component, NgModule, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '_models/user';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: true,
    imports: [NgIf, BsDropdownModule, FormsModule, AsyncPipe]
})

export class NavComponent implements OnInit {
  model: any = {};
  currentUser =   signal<User |null>(null);
  constructor(public accountService: AccountService) {

  }
  ngOnInit(): void {
    

  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
       

      },
      error: error => console.log(error)

    })



  }
  logout() {
    this.accountService.logout();
   
  }
}
