import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import '../styles/App.css';
import PageSearchBooks from './PageSearchBooks';
import PageListBooks from './PageListBooks';
import PageDetailBook from './PageDetailBook';

class BooksApp extends React.Component {
  state = {
    books: [],
    apiBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  updateBook = (book, shelf) => {
    const oldShelf = book.shelf;
    this.updateStateOfBook(book, shelf);
    BooksAPI.update(book, shelf).catch(() => {
      alert('There was an error on update book. Please try again!');
      this.updateStateOfBook(book, oldShelf);
    });
  };

  updateStateOfBook = (book, shelf) => {
    book.shelf = shelf;
    this.setState(prevState => ({
      books: prevState.books
        .filter(myBook => myBook.id !== book.id)
        .concat(book)
    }));
  };

  /**
   * This function gets books from searchBooks and check if each book already exists in this.state.books
   * If book exists, set book.shelf with defined shelf. Otherwise, set book.shelf whith 'none'
   * */
  updateApiBooks = books => {
    const apiBooksUpdated = books.map(book => {
      this.state.books.forEach(b => {
        if (book.id === b.id) {
          book.shelf = b.shelf;
        } else if (!book.shelf) {
          book.shelf = 'none';
        }
      });
      return book;
    });
    return apiBooksUpdated;
  };

  searchBooks = query => {
    BooksAPI.search(query).then(result => {
      if (!result || result.error) {
        result = [];
      }
      this.setState({
        apiBooks: this.updateApiBooks(result)
      });
    });
  };

  clearSearchBooks = () => {
    this.setState({ apiBooks: [] });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={({ history }) => (
            <PageListBooks
              books={this.state.books}
              onChangePage={history}
              handleUpdateBook={this.updateBook}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <PageSearchBooks
              books={this.state.apiBooks}
              onChangePage={history}
              handleUpdateBook={this.updateBook}
              searchBooks={this.searchBooks}
              clearSearchBooks={this.clearSearchBooks}
            />
          )}
        />
        <Route
          path="/book/:id"
          render={({ history, match }) => {
            const id = match.params.id;
            return <PageDetailBook id={id} onChangePage={history} />;
          }}
        />
      </div>
    );
  }
}

export default BooksApp;
