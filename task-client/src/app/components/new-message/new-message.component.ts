import { Component, OnInit, Inject } from '@angular/core';

const SAMPLE_OPTIONS = ["CS503", "UX501"];

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  sendSuccess: boolean = false;
  public choseOption: string ="";
  public title: string ="";
  public options = SAMPLE_OPTIONS;

  constructor(@Inject('data') private data) { }

  ngOnInit() {
    if(this.data.authenticated())
      console.log(this.data.userProfile);
      this.options=this.data.userProfile.userGroup;
  }
  setTitle(tit: string){
    this.title = tit;
  }
  setRecipient(rec: string){
    this.choseOption = rec;
  }

  // saveUser(user:IUser) {
  //   this.headers = new Headers();
  //   this.headers.append('Content-Type', 'application/json');
  //   this.editUserForm = user;
  //   this._http.post('api/user/'+this._current_user._id, JSON.stringify(this.editUserForm),{
  //     headers: this.headers
  //   }).subscribe(function(data) {
  //
  //     // if the update is successful then set the value to true
  //     // this is getting updated
  //     if (data){
  //       this.saveSuccess = true;
  //     }
  //     else{
  //       this.saveSuccess = false;
  //     }
  //   });
}
