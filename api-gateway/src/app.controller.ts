import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  private userService: ClientProxy;
  private bookService: ClientProxy;

  constructor() {
    this.userService = ClientProxyFactory.create({ transport: Transport.TCP, options: { host: 'localhost', port: 3001 } });
    this.bookService = ClientProxyFactory.create({ transport: Transport.TCP, options: { host: 'localhost', port: 3002 } });
  }

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
