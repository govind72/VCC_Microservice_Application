import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './nook.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Book {
    return this.booksService.findById(Number(id));
  }

  @Post()
  createBook(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('publishedYear') publishedYear: number,
  ): Book {
    return this.booksService.createBook(title, author, publishedYear);
  }
}
