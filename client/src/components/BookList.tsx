import React, { useEffect, useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('http://localhost:3005/books', { 
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        setBooks(data)
    });
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </div>
      ))}
    </div>
  );
};

export default BookList;