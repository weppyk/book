import express, { Request, Response } from 'express';
import { Book } from './components/Book';

const app = express();
const port = 3006;

// Mock database
const books: Book[] = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

app.get('/books', (req: Request, res: Response) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});