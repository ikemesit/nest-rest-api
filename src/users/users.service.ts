import { Injectable } from '@nestjs/common';

import { User } from './models/user.model';
import { CreateUserDto } from './dto/createuser.dto';

@Injectable()
export class UsersService {
  private readonly dataStore: User[] = [];

  findAll(): User[] {
    return this.dataStore;
  }

  findUser(id: string): User {
    return this.dataStore.find(user => user.id === id);
  }

  createUser(user: CreateUserDto): User {
    const newUser = new User(
      `${this.dataStore.length + 1}`,
      user.firstName,
      user.lastName,
      user.middleName,
      user.email,
      user.phone,
    );

    this.dataStore.push(newUser);

    return newUser;
  }
}
