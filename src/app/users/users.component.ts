import { Component, OnInit } from '@angular/core';

import {User} from './users.module';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  selectedUser: User;
  constructor() { }

  ngOnInit() {
  }
}
