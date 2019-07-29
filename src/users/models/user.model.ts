export class User {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    middleName: string,
    email: string,
    phone: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.email = email;
    this.phone = phone;
  }
}
