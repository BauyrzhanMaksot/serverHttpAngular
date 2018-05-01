import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    return this.http.post('https://udemy-ng-http-ae7ea.firebaseio.com/data.json', servers);
  }

  getServers() {
    //return this.http.get('https://udemy-ng-http-ae7ea.firebaseio.com/data.json');
    return this.http.get('http://localhost:8080/rest/users/all');
  }
}
