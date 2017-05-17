import { Injectable } from '@angular/core';
import { UserInfo } from "../models/userinfo.model";
import { LogInPairs } from "../models/loginpair.model";
import { Message } from "../models/message.model";
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {
  username: Object;
  userProfile: Object;
  private messagesSource = new BehaviorSubject<Message[]>([]);

  constructor(private http: Http) {
    this.username = localStorage.getItem('username');
    this.userProfile = localStorage.getItem('profile');
  }

  login(loginPair: LogInPairs): Promise<UserInfo> {
    let headers = new Headers({ 'content-type': 'application/json' });
    return this.http.post('/auth/login', loginPair, headers)
      .toPromise()
      .then((res: Response) => {
        //this.getProblems();
        console.log(res.json());
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

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('profile');
  }

  getMessages(): Observable<Message[]> {
    this.http.get(`messages/received/userId/${this.username}`)
      .toPromise()
      .then((res: Response) => {
        console.log(res.json());
        this.messagesSource.next(res.json());
      })
      .catch(this.handleError);

    return this.messagesSource.asObservable();
  }
  //
  // getProblem(id: number): Promise<Problem> {
  //   return this.http.get(`api/v1/problems/${id}`)
  //     .toPromise()
  //     .then((res: Response) => res.json())
  //     .catch(this.handleError);
  // }
  //
  // addProblem(problem: Problem): Promise<Problem> {
  //   let headers = new Headers({ 'content-type': 'application/json' });
  //   return this.http.post('/api/v1/problems', problem, headers)
  //     .toPromise()
  //     .then((res: Response) => {
  //       this.getProblems();
  //       return res.json();
  //     })
  //     .catch(this.handleError);
  // }

  // error hanlder
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.body || error);
  }
}
