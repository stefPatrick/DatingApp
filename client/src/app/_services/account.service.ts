import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { User } from '_models/user';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
private http =inject(HttpClient);
   baseUrl = environment.apiUrl;
   currentUser=signal<User | null>(null);
 
  SetCurrentUser(user :User)
  {
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUser.set(user);

  }

  login(model : any)
  {
    return this.http.post<User>(this.baseUrl + 'account/login',model).pipe(
      map((response :User) => {
const user=response;
if(user)
  {
    this.SetCurrentUser(user);
  }
      })
    )
  }
  register(model:any)
  {
      return this.http.post<User>(this.baseUrl + 'account/register',model).pipe(
      map(user => {
        if(user)
          {
            this.SetCurrentUser(user);
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
