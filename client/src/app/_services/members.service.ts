import { HttpClient} from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Member } from '_models/member';
import { Photo } from '_models/photo';
import { of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
 private http=inject(HttpClient);
 members= signal<Member[]>([]);

 baseUrl= environment.apiUrl;
  getMembers()
  {
    return this.http.get<Member[]>(this.baseUrl+'users').subscribe({
      next: members => this.members.set(members)
    })
  }
  getMember(username:string)
  {
    const   member=this.members().find(x=>x.username===username);
    if(member!==undefined) return of(member);

    return this.http.get<Member>(this.baseUrl+'users/'+ username)
  }
  updateMember(member:Member)
  {
    return this.http.put(this.baseUrl+'users',member).pipe(
      tap(()=>{
 this.members.update(members=>members.map(m=>m.username===member.username? member:m))
      })
  ); 
  }
  setMainPhoto(photo:Photo)
  {
    return this.http.put(this.baseUrl+'users/set-main-photo/'+photo.id,{}).pipe(
      tap(()=>{
 this.members.update(members=>members.map(m=>{
  if(m.photos.includes(photo)){

    m.photoUrl=photo.url
  }
  return m;
 }))
      
  })
    )
  }
 
deletePhoto(photo:Photo)
{
return this.http.delete(this.baseUrl+'users/delete-photo/'+photo.id).pipe(
tap(()=>{
  this.members.update(members=>members.map(m=>{
if(m.photos.includes(photo))
{
  m.photos=m.photos.filter(m=>m.id
    !==photo.id);
}
return m;
}))

 })
)}
}
