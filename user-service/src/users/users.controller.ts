import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.userService.findOne(Number(id));
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto.name, createUserDto.email);
  }


  @Delete(':id')
  delete(@Param('id') id: string) {
    const success = this.userService.delete(Number(id));
    if (!success) {
      return { message: 'User not found' };
    }
    return { message: 'User deleted successfully' };
  }
}
