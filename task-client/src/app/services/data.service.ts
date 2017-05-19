import { Injectable } from '@angular/core';
import { UserInfo } from "../models/userinfo.model";
import { LogInPairs } from "../models/loginpair.model";
import { Message } from "../models/message.model";
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

const DEFAULT_PROFILE ={
  "admin": "",
  "adminGroup": "",
  "adminGroupMembers": [],
  "userGroup": [],
  "userGroupContacts": []
}
@Injectable()
export class DataService {
  username: Object;
  userProfile = DEFAULT_PROFILE;
  messages: Message[];
  selectedId: number = 0;
  selectedTag: string = "";
  selectedStatus: number = 1;
  replyTitle: string = "";
  replyUser: string = "";
  replyText: string = "";
  isReply: boolean = false;
  message: Message;
  private messagesSource = new BehaviorSubject<Message[]>([]);

  constructor(private http: Http) {
    this.username = localStorage.getItem('username');
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
  }

  login(loginPair: LogInPairs): Promise<UserInfo> {
    let headers = new Headers({ 'content-type': 'application/json' });
    return this.http.post('/auth/login', loginPair, headers)
      .toPromise()
      .then((res: Response) => {
        localStorage.setItem('username', loginPair.email);
        localStorage.setItem('profile', JSON.stringify(res.json()));
        return res.json();
      })
      .catch(this.handleError);
  }

  authenticated(){
    if (localStorage.getItem('username')!=null){
      return true;
    }
    else {
      return false;
    }
  }

  isAdmin(): boolean{
    if (this.authenticated()==true)
      return this.userProfile.admin=="1";
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('profile');
  }

  getMessages(): Observable<Message[]> {
    this.http.get(`messages/received/userId/${this.username}`)
      .toPromise()
      .then((res: Response) => {
        //console.log(res.json());
        this.messagesSource.next(res.json());
      })
      .catch(this.handleError);
    return this.messagesSource.asObservable();
  }

  sendMessage(message: Message) {
    let headers = new Headers({ 'content-type': 'application/json' });
    return this.http.post(`messages/userId/${this.username}`, message, headers)
      .toPromise()
      .then((res: Response) => {
        this.getMessages();
        return res;
      })
      .catch(this.handleError);
  }

  readMsg(){
    if (this.message.status==1) {
      let content = {
        "change": 0 // Message read
      };
      let headers = new Headers({'content-type': 'application/json'});
      return this.http.put(`messages/userId/${this.username}/messageId/${this.selectedId}`, content, headers)
        .toPromise()
        .then((res: Response) => {
          this.getMessages();
          return res;
        })
        .catch(this.handleError);
    }
  }
  starMsg(){
    if(this.message.status!=4) {
      let content = {
        "change": 1 //mark star
      };
      let headers = new Headers({'content-type': 'application/json'});
      return this.http.put(`messages/userId/${this.username}/messageId/${this.selectedId}`, content, headers)
        .toPromise()
        .then((res: Response) => {
          this.getMessages();
          return res;
        })
        .catch(this.handleError);
    }
    if(this.message.status==4) {
      let content = {
        "change": 0 //unmark star
      };
      let headers = new Headers({'content-type': 'application/json'});
      return this.http.put(`messages/userId/${this.username}/messageId/${this.selectedId}`, content, headers)
        .toPromise()
        .then((res: Response) => {
          this.getMessages();
          return res;
        })
        .catch(this.handleError);
    }
  }
  deleteMsg(){
    return this.http.delete(`messages/userId/${this.username}/messageId/${this.selectedId}`)
      .toPromise()
      .then((res: Response) => {
        this.getMessages();
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }
}
