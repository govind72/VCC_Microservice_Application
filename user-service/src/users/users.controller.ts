import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'get_users' }) // Handle the "get_users" message
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'create_user' }) // Handle the "create_user" message
  create(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto.name, createUserDto.email);
  }
}
