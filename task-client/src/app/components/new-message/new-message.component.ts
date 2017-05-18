import { Component, OnInit, Inject } from '@angular/core';
import { NewMessage } from '../../models/newmessage.model';

const SAMPLE_OPTIONS = ["CS503", "UX501"];
const SAMPLE_NEWMESSAGE ={
  "title" : "",
  "recId": [],
  "text": "",
  "parentId": "",
  "tag":""
}
@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  newmsg: NewMessage = SAMPLE_NEWMESSAGE;
  sendSuccess: boolean = false;
  userGroup: string = "";
  public choseOption: string ="";
  public title: string ="";
  public options = SAMPLE_OPTIONS;

  constructor(@Inject('data') private data) { }

  ngOnInit() {
    this.setOptions();
    this.setReply();
  }

  setReply(): boolean {
    if(this.data.replyTitle!=""&&this.data.isReply==true){
      this.newmsg.title = this.data.replyTitle;
      let contacts = this.data.userProfile.userGroupContacts;
      for (let i = 0; i < contacts.length; i++){
        // look for the entry with a matching `contacts` value
        if (contacts[i].email == this.data.replyUser){
          this.choseOption=contacts[i].name;
        }
      }
      ;

      this.newmsg.text = this.data.replyText;
      this.setOptions();
      this.data.isReply=false;
    }
    // if(this.data.replyTitle==""){
    //   this.newmsg.title = "";
    //   this.newmsg.recId = [];
    //   this.newmsg.text = "";
    //   this.setOptions();
    // }
    return true;
  }

  setOptions(){
    if(this.data.authenticated())
      this.options=this.data.userProfile.userGroup;
  }

  sendMessage(){
    this.newmsg.parentId="";
    this.newmsg.tag=this.choseOption;
    let contacts = this.data.userProfile.userGroupContacts;
    for (let i = 0; i < contacts.length; i++){
      // look for the entry with a matching `contacts` value
      if (contacts[i].name == this.choseOption){
        this.newmsg.recId=[contacts[i].email];
      }
    }
    this.data.sendMessage(this.newmsg);
  }
}
