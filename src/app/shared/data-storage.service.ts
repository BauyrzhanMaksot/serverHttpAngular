import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UsersService} from '../users/users.service';
import {Observable} from 'rxjs/Observable';
import {UserRequest} from './userRequest';
import {User} from '../users/users.module';


@Injectable()
export class DataStorage {
  constructor(private httpClient: HttpClient) {}
  storeServers(firstName: string, contactNumber: string) {
    const body = JSON.stringify({ firstName, contactNumber});

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

  getUsers() {
    return this.httpClient.get<UserRequest>('http://localhost:8080/rest/users/all')
      /*.map(
        (userRequest) => {
          console.log(userRequest.body)
          return userRequest.body;
        }
      ).subscribe(
      (user: User[]) => {
        console.log(user)
        this.userService.setUsers(user);
        }
      )*/;
  }
}
