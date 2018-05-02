import {Component, OnInit} from '@angular/core';
import {User} from '../users.module';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {DataStorage} from '../../shared/data-storage.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  user: User;
  id: number;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private dataStorage: DataStorage,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.usersService.getUser(this.id);
      }
    );
  }

  OnEditUser() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteUser() {
    this.usersService.deleteUser(this.id);
    this.dataStorage.deleteUser(this.id).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
    this.router.navigate(['/users']);
  }
}
