import {Component, OnInit} from '@angular/core';
import {ServiceService} from './service.service';
import {User} from './shared/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  servers: User[] = [];
  constructor(private serverService: ServiceService) {}

  ngOnInit() {
    this.onGet();
  }

  onAddUser(firstName: string, contactNumber: string) {
    this.serverService.storeServers(firstName, contactNumber).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (users: User[]) => {
        /*for (const user of users) {
          this.servers.push(user);
        }*/ this.servers = users;
      },
      (error) => console.log(error)
    );
  }
}
