import {Component, OnInit} from '@angular/core';
import {User} from '../users.module';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UsersService} from '../users.service';

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
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.usersService.getRecipe(this.id);
      }
    );
  }
  OnEditUser() {
    this.router.navigate(['edit'],{relativeTo: this.route});
  }
}
