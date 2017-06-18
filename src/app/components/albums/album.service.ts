import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album.model';
import { API_URL } from '../../config/config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumService {
  constructor(private http: Http) {

  }

  getList(): Observable<Album[]> {
    return this.http.get(API_URL + '/albums')
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    return res.json().map(response => {
      return new Album(response);
    });
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
