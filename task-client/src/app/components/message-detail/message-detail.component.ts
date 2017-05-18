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
  }

  getMessages(): void {
    this.subscriptionMessages = this.data.getMessages()
      .subscribe(messages => this.messages = messages);
  }

  replyMessage(){
    for (let message of this.messages) {
      if (message.id == this.data.selectedId)
      {
        this.data.isReply=true;
        this.data.replyTitle = "Re: " + message.title;
        this.data.replyUser = message.createdById;
        this.data.replyText = "\n----------------------\n"
                              +"The following message was sent by: "+message.createdById + "\n"
                              +"At: "+message.sendTime+"\n"
                              +"Content: \n"+message.text;
      }
    }
  }
  markMsg(){
    this.data.starMsg();
  }
  deleteMsg(){
    this.data.deleteMsg();
  }

}
