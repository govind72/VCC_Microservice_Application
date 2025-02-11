import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern({ cmd: 'get_books' }) // Handle the "get_books" message
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @MessagePattern({ cmd: 'create_book' }) // Handle the "create_book" message
  createBook(data: { title: string; author: string; publishedYear: number }): Book {
    const { title, author, publishedYear } = data;
    return this.booksService.createBook(title, author, publishedYear);
  }
}
