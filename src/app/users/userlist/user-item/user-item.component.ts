import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../users.module';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
