import { HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Member } from '_models/member';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
 private http=inject(HttpClient);

 baseUrl= environment.apiUrl;
  getMembers()
  {
    return this.http.get<Member[]>(this.baseUrl+'users');
  }
  getMember(username:string)
  {
    return this.http.get<Member>(this.baseUrl+'users/'+ username)
  }
 
}
