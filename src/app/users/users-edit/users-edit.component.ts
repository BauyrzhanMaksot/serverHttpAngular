import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { UsersService } from '../users.service';
import {User} from '../users.module';
import {DataStorage} from '../../shared/data-storage.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private dataStorage: DataStorage,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

  onAddUser(firstName: string, contactNumber: string) {
    this.usersService.addUser(new User(100, firstName , contactNumber));
    this.dataStorage.storeServers(firstName , contactNumber).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
