import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Simple Keyword Highlight App';
  username = "";
  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
    if (this.auth.authenticated()){
      this.username = this.auth.userProfile.nickname;
    }
  }

  login(): void {
    this.auth.login()
      .then(profile => this.username = profile.nickname);
  }

  logout(): void {
    this.auth.logout();
  }

  isAuthenticated() {
    return this.auth.authenticated();
  }

}
