import { Component, OnInit, Inject } from '@angular/core';
import { LogInPairs } from '../../models/loginpair.model';
import { Message } from '../../models/message.model';
import { Subscription } from 'rxjs/Subscription';

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
  messages: Message[] = [];
  subscriptionMessages: Subscription;

  loginPairs: LogInPairs = Object.assign({}, DEFAULT_LOGIN);

  constructor(@Inject('data') private data) { }

  ngOnInit() {
    if (this.data.authenticated()){
      this.username = this.data.username;
      this.getMessages();
    }
  }

  login(): void {
    //console.log(this.loginPairs.email);
    this.data.login(this.loginPairs)
      .then(this.username = this.loginPairs.email)
      .catch(error => console.log(error._body));
    this.loginPairs = Object.assign({}, DEFAULT_LOGIN);
  }

  logout(): void {
    this.username="";
    this.data.logout();
  }

  isAuthenticated() {
    return this.data.authenticated();
  }

  getMessages(): void {
    this.subscriptionMessages = this.data.getMessages()
      .subscribe(messages => this.messages = messages);
  }
  getMessage(id: number): void{
    this.data.selectedId=id;
    for (let msg of this.messages)
    {
      if (msg.id==id)
        this.data.message=msg;
    }
    this.data.readMsg();
  }
}
