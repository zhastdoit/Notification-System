import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string = ""; //AccountID
  accountType: string = ""; //Username
  note: string = "";
  members= [];
  constructor(@Inject('data') private data) { }

  ngOnInit() {
      if(this.data.authenticated()) {
        this.username = this.data.username;
        if(this.data.isAdmin()){
          this.accountType=" Administrative ";
          this.note = "You can send group messages to:";
          this.members = this.data.userProfile.adminGroupMembers;
        } else
          this.accountType=" Student ";
          this.note = "You can contact with:"
          this.members = this.data.userProfile.userGroup;
        }
  }


  logout(): void {
    this.username="";
    this.note="";
    this.members=[];
    this.data.logout();
  }
}
