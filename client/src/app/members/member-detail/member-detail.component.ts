import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [TabsModule,GalleryModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent implements OnInit {
ngOnInit(): void {
this.loadMember();
}


private memberService=inject(MembersService);
private routes=inject(ActivatedRoute);  
member?:Member;
images: GalleryItem[]=[];

loadMember()
{
const username= this.routes.snapshot.paramMap.get('username');
if(!username)
  return;
this.memberService.getMember(username).subscribe({
  next:member => {this.member=member;
    member.photos.map(p=>{
      this.images.push(new ImageItem({src : p.url,thumb:p.url}))
    }

    )

  } 
})

}
}
