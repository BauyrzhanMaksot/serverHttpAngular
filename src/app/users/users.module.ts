export class User {
  public id: number;
  public firstName: string;
  public contactNumber: string;

  constructor(id: number, firstName: string, contactNumber: string) {
    this.id = id;
    this.firstName = firstName;
    this.contactNumber = contactNumber;
  }
}
