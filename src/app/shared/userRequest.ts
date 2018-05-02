import {User} from '../users/users.module';


export class UserRequest {
  public success: string;
  public body: User[];

  constructor(success: string, body: User[]) {
    this.success = success;
    this.body = body;
  }
}
