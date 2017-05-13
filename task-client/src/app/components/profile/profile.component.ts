import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string = ""; //AccountID
  nickname: string = ""; //Username
  email: string = "";
  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
      let profile = this.auth.getProfile();
      if(this.auth.authenticated()) {
        this.email = profile.email;
        this.username = profile.name;
        this.nickname = profile.nickname;
      }
  }

  logout(): void {
    this.auth.logout();
  }
}
