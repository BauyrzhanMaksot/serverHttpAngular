import {User} from './users.module';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {DataStorage} from '../shared/data-storage.service';

@Injectable()
export class UsersService implements OnInit {

  users: User[] = [new User(1, 'bauka' , '8777' )];
  constructor(private httpClient: HttpClient, private dataStorage: DataStorage) {}
  ngOnInit() {
    this.setUsers();
  }
  getUsers() {
    return this.users.slice();
  }

  setUsers() {
    this.dataStorage.getServers().subscribe(
      (users: User[]) => {
        /*for (const user of users) {
          this.servers.push(user);
        }*/ this.users = users;
      },
      (error) => console.log(error)
    );
  }
  getRecipe(index: number) {
    this.setUsers();
    return this.users[index];
  }
}
