import { Component, OnInit, Inject } from '@angular/core';
import { Message } from '../../models/message.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [];
  subscriptionMessages: Subscription;

  constructor(@Inject('data') private data) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.subscriptionMessages = this.data.getMessages()
      .subscribe(messages => this.messages = messages);
  }
}
