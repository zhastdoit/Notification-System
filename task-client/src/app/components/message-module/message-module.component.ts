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
  subscriptionMessages: Subscription;
  unreadNumber = 0;
  constructor(@Inject('data') private data) { }

  ngOnInit() {
    if(this.data.authenticated())
      this.getUnreadNumber();
  }

  getUnreadNumber(): void {
    this.subscriptionMessages = this.data.getMessages()
      .subscribe(messages => {
        this.messages = messages;
        let count = 0;
        for (let message of this.messages){
          if (message.status==1) count++;
        }
        this.unreadNumber=count;
      });
  }
}
