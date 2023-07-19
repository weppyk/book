import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Book } from './components/Book';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock database
const books: Book[] = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

// return a list of books
app.get('/books', (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.json(books);
});

export default app;