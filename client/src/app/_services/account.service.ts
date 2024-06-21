import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '_models/user';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   baseUrl ='https://localhost:5001/api';
   currentUser=signal<User | null>(null);
  constructor(private http: HttpClient) { 

  }
  SetCurrentUser(user :User)
  {
    this.currentUser.set(user);

  }

  login(model : any)
  {
    return this.http.post<User>(this.baseUrl + '/account/login',model).pipe(
      map((response :User) => {
const user=response;
if(user)
  {
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUser.set(user);
  }
      })
    )
  }
  register(model:any)
  {
      return this.http.post<User>(this.baseUrl + '/account/register',model).pipe(
      map(user => {
        if(user)
          {
            localStorage.setItem('user',JSON.stringify(user));
          this.currentUser.set(user);
          }
          return user;
      }
      
        

      )
      
      )

  }
  logout()
  {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
