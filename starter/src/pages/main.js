import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../BooksAPI';
import BookShelf from '../components/BookShelf';

const MainPage = () => {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      const books = await getAll();
      setBooks(books);
    } catch (error) {
      console.log(`[ERR] failed to fetch books\nReason: ${error}`);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  // re-fetch list of books after a book shelf is updated
  const updateDataStore = () => fetchBooks();

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div id="currentlyReading">
            {books && (
              <BookShelf
                title="Currently Reading"
                updateStore={() => updateDataStore()}
                books={books.filter((book) => book.shelf === 'currentlyReading')}
              />
            )}
          </div>
          <div id="wantToRead">
            {books && (
              <BookShelf
                title="Want to Read"
                updateStore={() => updateDataStore()}
                books={books.filter((book) => book.shelf === 'wantToRead')}
              />
            )}
          </div>
          <div id="read">
            {books && (
              <BookShelf
                title="Read"
                updateStore={() => updateDataStore()}
                books={books.filter((book) => book.shelf === 'read')}
              />
            )}
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
