import React from 'react';
import ShelfPicker from './ShelfPicker';

const Book = ({ id, title, shelf, authors, thumbnail, updateStore }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`
          }}
        ></div>
        <ShelfPicker bookId={id} bookShelf={shelf} updateStore={updateStore} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors ? authors.toString() : ''}</div>
    </div>
  );
};

export default Book;
