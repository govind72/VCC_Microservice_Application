import { Injectable } from '@nestjs/common';

import { User } from './users.interface';

@Injectable()
export class UserService {
  private users: User[] = []; // In-memory array for storing users
  private idCounter = 1;

  findAll(): User[] {
    return this.users;
  }

  create(name: string, email: string): User {
    const newUser: User = { id: this.idCounter++, name, email };
    this.users.push(newUser);
    return newUser;
  }

}
