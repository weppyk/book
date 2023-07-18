import express, { Request, Response } from 'express';
import { Book } from './components/Book';

const app = express();

// Mock database
const books: Book[] = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

// return a list of books
app.get('/books', (req: Request, res: Response) => {
  res.json(books);
});

export default app;