import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/dtos/users.dtos';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'mail@mail.com',
      password: '1234',
      role: 'admin',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`user # ${id} not found!`);
    }
    return user;
  }
}
