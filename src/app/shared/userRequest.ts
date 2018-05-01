import {User} from './user.module';

export class UserRequest {
  public success: string;
  public body: User[];

  constructor(success: string, body: User[]) {
    this.success = success;
    this.body = body;
  }
}
