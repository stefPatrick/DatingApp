
import { Component, OnInit, inject } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from '_models/user';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [ RouterOutlet, NavComponent, HomeComponent,NgxSpinnerComponent]
})
export class AppComponent implements OnInit {
  

  title = 'DatingApp';
 
  private accountService=inject(AccountService);
  users:any;
  ngOnInit(): void {
   
   this.setCurrentUser();
   

  }
 
  
  
  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}

