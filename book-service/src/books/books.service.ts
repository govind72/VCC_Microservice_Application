import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './nook.model';

@Injectable()
export class BooksService {
  private books: Book[] = [
    new Book(1, '1984', 'George Orwell', 1949),
    new Book(2, 'To Kill a Mockingbird', 'Harper Lee', 1960),
  ];

  findAll(): Book[] {
    return this.books;
  }

  findById(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found.`);
    }
    return book;
  }

  createBook(title: string, author: string, publishedYear: number): Book {
    const newBook = new Book(
      this.books.length + 1,
      title,
      author,
      publishedYear,
    );
    this.books.push(newBook);
    return newBook;
  }
}
