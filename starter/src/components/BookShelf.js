import React from 'react';
import Book from './Book';

const BookShelf = ({ title, books, updateStore }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(({ id, title, shelf, authors, imageLinks }) => (
            <li key={id}>
              <Book
                id={id}
                key={id}
                title={title}
                shelf={shelf}
                authors={authors}
                updateStore={updateStore}
                thumbnail={imageLinks.thumbnail}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
