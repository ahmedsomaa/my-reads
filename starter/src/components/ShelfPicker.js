import React, { useCallback, useEffect, useState } from 'react';
import { get, update } from '../BooksAPI';

const ShelfPicker = ({ bookId, bookShelf, updateStore }) => {
  const [shelf, setShelf] = useState('default');

  // fetch a specific book
  const fetchBook = useCallback(async () => {
    try {
      const book = await get(bookId);
      setShelf(book.shelf);
    } catch (error) {
      console.log(`[ERR] failed to fetch the book with id=${bookId}\n Reason: ${error}`);
    }
  }, [bookId]);

  // handle current value of book shelf
  useEffect(() => {
    if (!bookShelf) {
      fetchBook();
    }
    setShelf(bookShelf);
  }, [bookShelf, fetchBook]);

  // update book shelf & data store
  const updateShelf = async (book, onStoreUpdate) => {
    try {
      await update(book, book.shelf);
      onStoreUpdate();
    } catch (error) {
      console.log(`[ERR] failed to update book shelf\nReason: ${error}`);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={shelf}
        onChange={(e) => updateShelf({ id: bookId, shelf: e.target.value }, updateStore)}
      >
        <option value="default" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfPicker;
