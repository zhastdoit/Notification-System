import { Component, OnInit, Inject, Input} from '@angular/core';
import { Message } from '../../models/message.model';
import { ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { Subscription } from 'rxjs/Subscription';

const DEFAULT_MESSAGE: Message = Object.freeze({
  id: 0,
  title: "",
  text: "",
  sendTime: "",
  tag: "",
  createdById: "",
  status: 0,
  parentId: 0
});

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})

export class MessageDetailComponent implements OnInit {
  message: Message = DEFAULT_MESSAGE;
  subscriptionMessages: Subscription;

  constructor(
    private route: ActivatedRoute,
    @Inject("data") private data
  ) { }

  ngOnInit() {
    this.getMessage();
    console.log(this.message);
  }

  getMessage(): void {
    this.data.getMessages()
      .subscribe(messages => {
        for (let message of messages) {
          console.log("message.id: "+message.id);
          console.log("selectedid: "+this.data.selectedId);
          if (message.id==this.data.selectedId){
            this.message=message;
            console.log("getMessage in dataservice if"+message);
          }
        }
      });
  }

  // newmsg(){
  //   this.nmc.setTitle("Re: ");
  //   this.nmc.setRecipient(this.user);
  // }
}
