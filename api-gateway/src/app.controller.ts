import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
@Controller()
export class AppController {

  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
    @Inject('BOOK_SERVICE') private readonly bookService: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Post('users')
  createUser(@Body() createUserDto: any) {
    return this.userService.send({ cmd: 'create_user' }, createUserDto);
  }

  @Get('users')
  findAllUsers() {
    return this.userService.send({ cmd: 'get_users' }, {});
  }

  @Post('books')
  createBook(@Body() createBookDto: any) {
    return this.bookService.send({ cmd: 'create_book' }, createBookDto);
  }

  @Get('books')
  findAllBooks() {
    return this.bookService.send({ cmd: 'get_books' }, {});
  }
}
