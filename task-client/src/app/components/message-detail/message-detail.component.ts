import { Component, OnInit, Inject, Input} from '@angular/core';
import { Message } from '../../models/message.model';
import { ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { Subscription } from 'rxjs/Subscription';

// const DEFAULT_MESSAGE: Message = Object.freeze({
//   id: 0,
//   title: "",
//   text: "",
//   sendTime: "",
//   tag: "",
//   createdById: "",
//   status: 0,
//   parentId: 0
// });

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})

export class MessageDetailComponent implements OnInit {
  messages: Message[];
  subscriptionMessages: Subscription;

  constructor(
    private route: ActivatedRoute,
    @Inject("data") private data
  ) { }

  ngOnInit() {
    this.getMessages();
    console.log(this.messages);
  }


  getMessages(): void {
    this.subscriptionMessages = this.data.getMessages()
      .subscribe(messages => this.messages = messages);
  }

  // newmsg(){
  //   this.nmc.setTitle("Re: ");
  //   this.nmc.setRecipient(this.user);
  // }
}
