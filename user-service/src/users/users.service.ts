import { Injectable } from '@nestjs/common';

import { User } from './users.interface';

@Injectable()
export class UserService {
  private users: User[] = []; // In-memory array for storing users
  private idCounter = 1;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  create(name: string, email: string): User {
    const newUser: User = { id: this.idCounter++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, name: string, email: string): User | null {
    const user = this.findOne(id);
    if (!user) return null;

    user.name = name;
    user.email = email;
    return user;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}
