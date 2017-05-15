import { Component, OnInit } from '@angular/core';
import { NewMessageComponent } from '../new-message/new-message.component';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  title: string = "CS503停课通知";
  username: string = "CS503小助手";
  user: string = "CS503小助手"
  time: string = "3:36 PM Yesterday";
  content: string = "啊 同学们 今天不上课了哈 就酱";
  constructor(
    // private nmc: NewMessageComponent
  ) { }

  ngOnInit() {
  }

  // newmsg(){
  //   this.nmc.setTitle("Re: ");
  //   this.nmc.setRecipient(this.user);
  // }
}
