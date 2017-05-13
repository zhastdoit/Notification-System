import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  // Configure Auth0
  lock = new Auth0Lock('b_FS9zxURaIR7-RuFeY2b3rNkxha2sUO', 'charleszha.auth0.com', {});
  userProfile: Object;

  constructor(public router: Router) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for the Lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information *in async method!
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

  // public login() {
  //   this.lock.show();
  // }

  public login(): Promise<Object> {
    return new Promise((resolve, reject) => {
      // Call the show method to display the widget.
      this.lock.show((error: string, profile: Object, id_token: string) => {
        if (error) {
          reject(error);
        } else {
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', id_token);
          resolve(profile);
        }
      });
    })
  }



  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('id_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  public getProfile(): Object {
    return JSON.parse(localStorage.getItem('profile'));
  }

  // public resetPassword(): void {
  //   let profile = this.getProfile();
  //   let url: string = `https://${this.domain}/dbconnections/change_password`;
  //   let headers = new Headers({ 'content-type': 'application/json' });
  //   let body = {
  //     client_id: this.clientId,
  //     email: profile.email,
  //     connection: 'Username-Password-Authentication'
  //   }
  //
  //   this.http.post(url, body, headers)
  //     .toPromise()
  //     .then((res: Response) => {
  //       console.log(res.json());
  //     })
  //     .catch(this.handleError);
  // }
  // private handleError(error: any): Promise<any> {
  //   console.error('Error occurred', error);
  //   return Promise.reject(error.message || error);
  // }
}
