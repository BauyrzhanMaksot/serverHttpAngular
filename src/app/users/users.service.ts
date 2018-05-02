import {User} from './users.module';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {DataStorage} from '../shared/data-storage.service';

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

  getRecipe(index: number) {
    return this.users[index];
  }
}
