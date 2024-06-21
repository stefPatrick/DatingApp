
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from '_models/user';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavComponent, HomeComponent]
})
export class AppComponent implements OnInit {
  [x: string]: any;

  title = 'DatingApp';
 
  constructor( private accountService: AccountService) { }
  ngOnInit(): void {
   
   this.setCurrentUser();


  }
 
  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.SetCurrentUser(user);
  }
}

