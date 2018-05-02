import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../users.module';
import {UsersService} from '../users.service';
import {DataStorage} from '../../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Output() userWasSelected = new EventEmitter<User>();
  users: User[];

  constructor(private dataStorage: DataStorage,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.onGet();
  }
  onUserSelected(user: User) {
    this.userWasSelected.emit(user);
  }
  onGet() {
    this.dataStorage.getServers().subscribe(
      (users: User[]) => {
        /*for (const user of users) {
          this.servers.push(user);
        }*/ this.users = users;
      },
      (error) => console.log(error)
    );
  }

  onAddUser(firstName: string, contactNumber: string) {
    this.dataStorage.storeServers(firstName, contactNumber).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
