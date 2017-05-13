import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getSampleText(): Promise<string> {
    return this.http.get(`api/v1/sampleText`)
      .toPromise()
      .then((res: Response) => res.text())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //For demo purposes only
    return Promise.reject(error.body || error);
  }
}
