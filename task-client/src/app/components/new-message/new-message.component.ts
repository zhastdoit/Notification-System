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
      this.setReplyTo();
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
  setReplyTo(){
    // Deal with 2 types of user: student and admin
    if (this.data.isAdmin()==false){
      let contacts = this.data.userProfile.userGroupContacts;
      for (let i = 0; i < contacts.length; i++){
        // look for the entry with a matching `contacts` value
        if (contacts[i].email == this.data.replyUser){
          this.choseOption=contacts[i].name;
        }
      }
    } else {
      this.choseOption=this.data.replyUser;
    }
  }

  setOptions(){
    if(this.data.authenticated()){
      if(this.data.isAdmin()){
        let group = [this.data.userProfile.adminGroup];
        this.options=group.concat(this.data.userProfile.adminGroupMembers);
        console.log(this.options);
      }
    }
    else
      this.options=this.data.userProfile.userGroup;
  }

  sendMessage(){
    this.newmsg.parentId="";
    this.newmsg.tag=this.choseOption;
    if(this.data.isAdmin()){
      if (this.choseOption==this.data.userProfile.adminGroup)
        this.newmsg.recId = this.data.userProfile.adminGroupMembers;
      else
        this.newmsg.recId=[this.choseOption];
    } else {
      let contacts = this.data.userProfile.userGroupContacts;
      for (let i = 0; i < contacts.length; i++) {
        // look for the entry with a matching `contacts` value
        if (contacts[i].name == this.choseOption) {
          this.newmsg.recId = [contacts[i].email];
        }
      }
    }
    this.data.sendMessage(this.newmsg);
  }
}
