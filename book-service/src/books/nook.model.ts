export class Book {
    id: number;
    title: string;
    author: string;
    publishedYear: number;
  
    constructor(id: number, title: string, author: string, publishedYear: number) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
    }
  }
  