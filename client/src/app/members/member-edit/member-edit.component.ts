import { Component, HostListener, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Member } from '_models/member';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { PhotoEditorComponent } from "../photo-editor/photo-editor.component";

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule, FormsModule, PhotoEditorComponent],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.scss'
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm?: NgForm;
  @HostListener('window:beforeunload', ['$event']) notify($event: any) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }

  ngOnInit(): void {
    this.loadMember();
  }
  member?: Member;
  private accountService = inject(AccountService);
  private memberService = inject(MembersService)
  private toaster = inject(ToastrService);
  loadMember() {
    const user = this.accountService.currentUser();
    if (!user)
      return;
    this.memberService.getMember(user.username).subscribe({
      next: member => this.member = member
    })
  }
  updateMember() {
   this.memberService.updateMember(this.editForm?.value).subscribe({
    next:_=>{
      this.toaster.success("profile updated succesfully");
      this.editForm?.reset(this.member);
    }
   })
    
  }
  onMemberChange(event:Member)
  {
this.member=event;
  }
}
