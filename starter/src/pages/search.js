import React, { useEffect, useState, useCallback } from 'react';
import { search } from '../BooksAPI';
import Book from '../components/Book';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // filter books database with provided query
  const searchBooks = useCallback(async () => {
    try {
      const response = await search(query, 10);
      // check if response returns "empty query" error
      response.error ? setResults([]) : setResults(response);
    } catch (error) {
      console.log(`[ERR] failed to search books database\nReason: ${error}`);
    }
  }, [query]);

  // debounce here
  // only query database every 500ms
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query !== '') {
        searchBooks();
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, searchBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a href="/" className="close-search">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results.length !== 0
            ? results.map((result) => (
                <li key={result.id}>
                  <Book
                    id={result.id}
                    title={result.title}
                    shelf={result.shelf}
                    authors={result.authors}
                    thumbnail={result?.imageLinks?.thumbnail}
                  />
                </li>
              ))
            : query !== '' && (
                <p style={{ fontSize: '26px', color: 'red' }}>
                  No books available for query:{' '}
                  <span style={{ color: 'blue', fontWeight: 'bold' }}>{query}</span>
                </p>
              )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
