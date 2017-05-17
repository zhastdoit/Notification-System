import { Component, OnInit, Inject } from '@angular/core';
import { LogInPairs } from '../../models/loginpair.model';
import { UserInfo } from "../../models/userinfo.model";
const DEFAULT_LOGIN: LogInPairs = Object.freeze({
  email: "",
  password: ""
});

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username = "";
  userinfo: UserInfo;
  loginPairs: LogInPairs = Object.assign({}, DEFAULT_LOGIN);

  constructor(@Inject('data') private data) { }

  ngOnInit() {
    if (this.data.authenticated()){
      this.username = this.data.username;
    }
  }

  login(): void {
    //console.log(this.loginPairs.email);
    this.data.login(this.loginPairs)
      .then(this.username = this.loginPairs.email)
      .catch(error => console.log(error._body));
    this.loginPairs = Object.assign({}, DEFAULT_LOGIN);
  }

  // signup(): void{
  //   console.log("signup button is clicked.");
  // }

  logout(): void {
    this.username="";
    this.data.logout();
  }

  isAuthenticated() {
    return this.data.authenticated();
  }

}
