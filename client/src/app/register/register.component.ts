import { Component, EventEmitter, Input, OnInit, Output, inject, output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class RegisterComponent implements OnInit {

  cancelRegister = output<boolean>();
  private toastr=inject(ToastrService);
  model: any = {}
  constructor(private accountservice: AccountService) { }
  ngOnInit(): void {

  }
  register() {
    this.accountservice.register(this.model).subscribe(
      {
        next: response => {
          this.cancel();

        },
        error: error => this.toastr.error(error.error)

      }
    )
  }
  cancel() {
    this.cancelRegister.emit(false);
  }


}
