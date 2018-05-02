import {User} from './users.module';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {DataStorage} from '../shared/data-storage.service';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsersService {
  //usersChanged = new Subject<User[]>();
  users: User[] = [new User(1, 'bauka' , '8777' )];
  constructor(private _dataStorage: DataStorage) {}

  getUsers() {
    return this._dataStorage.getUsers();
  }
  setUsers(users: User[]) {
    this.users = users;
    //this.usersChanged.next(this.users.slice());
  }

  getUser(index: number) {
    return this.users[index];
  }

   addUser(user: User) {
    this.users.push(user);
    //this.usersChanged.next(this.recipes.slice());
  }

  updateUser(index: number, newUser: User) {
    this.users[index] = newUser;
    //this.recipesChanged.next(this.recipes.slice());
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  getRealId(index: number) {
    return this.users[index].id;
  }
}
