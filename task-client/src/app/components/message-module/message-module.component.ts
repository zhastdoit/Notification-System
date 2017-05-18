import { Component, OnInit, Inject } from '@angular/core';
import { Message } from '../../models/message.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message-module',
  templateUrl: './message-module.component.html',
  styleUrls: ['./message-module.component.css']
})
export class MessageModuleComponent implements OnInit {
  messages: Message[] = [];
  tags: string[] = [];
  subscriptionMessages: Subscription;
  unreadNumber = 0;
  constructor(@Inject('data') private data) { }

  ngOnInit() {
    this.getMessages();
  }
  getMessages(): void {
    this.subscriptionMessages = this.data.getMessages()
      .subscribe(messages => {
        this.messages = messages;
        this.getListInfo();
      });
  }
  //Get number of unread msg and list of tags.
  getListInfo(): void {
    let count = 0;
    for (let message of this.messages){
      if(message.status!=3)
        this.tags.push(message.tag.toString());
      if (message.status==1)
        count++;
    }
    this.tags = this.remove_duplicates(this.tags);
    this.unreadNumber=count;
  }

  remove_duplicates(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    arr = [];
    for (let key in obj) {
      arr.push(key);
    }
    return arr;
  }

  showTag(tag: string): void {
    this.data.selectedTag = tag;
  }

  newmsg(): void {
    this.data.replyTitle = "";
    this.data.replyUser = [];
    this.data.replyText = "";
  }
}

