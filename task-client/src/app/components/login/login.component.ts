import { Component, Inject } from '@angular/core';
import { LogInPairs } from '../../models/loginpair.model';
import { UserInfo } from "../../models/userinfo.model";
const DEFAULT_LOGIN: LogInPairs = Object.freeze({
  email: "",
  password: ""
});

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

}
