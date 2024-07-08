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
  private memberService =inject( MembersService);
  members :Member[]=[];
  ngOnInit(): void {
    this.loadMembers();
  }
  loadMembers()
 {
this.memberService.getMembers().subscribe({
  next : members => this.members=members
})
 }
}
