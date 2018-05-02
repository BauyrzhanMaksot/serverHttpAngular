import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../users.module';
import {UsersService} from '../users.service';

import {ActivatedRoute, Router} from '@angular/router';
import {DataStorage} from '../../shared/data-storage.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[];
  subscription: Subscription;
  constructor(private userService: UsersService,
              private dataStorage: DataStorage,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.userService.getUsers()
      .subscribe(
        (data) => {
          this.users = data.body;
          this.userService.setUsers(data.body);
        }
      );
  }

  onAddUser(firstName: string, contactNumber: string) {
    /*this.dataStorage.storeServers(firstName, contactNumber).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );*/
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
