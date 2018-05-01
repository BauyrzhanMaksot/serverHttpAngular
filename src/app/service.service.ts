import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRequest} from './shared/userRequest';


@Injectable()
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  storeServers(firstName: string, contactNumber: string) {
    const body = JSON.stringify({ firstName, contactNumber});
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpClient.post('http://localhost:8080/rest/users/add', body ).map(
      (response) => {
        return response;
      }
    ).catch(
      (error) => {
        console.log(error);
        return Observable.throw('Something went Wrong');
      }
    );
  }

  getServers() {
    return this.httpClient.get<UserRequest>('http://localhost:8080/rest/users/all')
      .map(
        (userRequest) => {
          return userRequest.body;
        }
      ).catch(
        (error) => {
          console.log(error);
          return Observable.throw('Something went Wrong');
        }
      );
  }
}
