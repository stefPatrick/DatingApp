
import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgIf, RegisterComponent]
})
export class HomeComponent {
  registerMode = false;



  ngOnInit(): void {

  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }



  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
