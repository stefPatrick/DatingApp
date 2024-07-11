import { Component, inject, OnInit } from '@angular/core';
import { Member } from '_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
    selector: 'app-members-list',
    standalone: true,
    templateUrl: './members-list.component.html',
    styleUrl: './members-list.component.scss',
    imports: [MemberCardComponent]
})
export class MembersListComponent implements OnInit {
  memberService =inject( MembersService);
  members :Member[]=[];
  ngOnInit(): void {
    if(this.memberService.members().length ===0)
    this.loadMembers();
  }
  loadMembers()
 {
this.memberService.getMembers()
 }
}
