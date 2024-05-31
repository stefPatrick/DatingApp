import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  
  title = 'DatingApp';
  users:any;
  constructor( private http:HttpClient){}
  ngOnInit(): void {
    //Called after the constructor, initializinginput properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('https://localhost:5001/api/users').subscribe(
      {
        next:response =>this.users=response,
        error: ()=>{},
        complete: ()=> console.log('request completed')
      }
    )
  }
}

