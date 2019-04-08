import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Promise from 'bluebird';
import PageSearchBooks from './PageSearchBooks';
import PageListBooks from './PageListBooks';
import PageDetailBook from './PageDetailBook';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    Promise.config({ cancellation: true }); //Enable promise cancellation
    this.searchPromise = Promise.resolve();
    this.state = {
      books: [],
      apiBooks: [],
      isLoading: true
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books,
        isLoading: false
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
  rewriteBooksFromApi = books => {
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

  /**
   * If already exists a previous promise, It's cancelled before. Next a new promise is create and send.
   * It's avoids request results that have not yet arrived override new requests while typing
   */
  searchBooks = query => {
    this.showLoading();
    this.searchPromise.cancel();
    if (query) {
      this.searchPromise = this.onSearchBooks(query).then(result => {
        !result || result.error
          ? this.clearSearchBooks()
          : this.updateApiBooks(this.rewriteBooksFromApi(result));
      });
    } else {
      this.clearSearchBooks();
    }
  };

  onSearchBooks = query => {
    return new Promise((resolve, reject) => {
      BooksAPI.search(query.trim())
        .then(resolve)
        .catch(reject);
    });
  };

  showLoading = () => {
    this.setState({ isLoading: true });
  };

  clearSearchBooks = () => {
    this.updateApiBooks([]);
  };

  updateApiBooks = data => {
    this.setState({ apiBooks: data, isLoading: false });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <PageListBooks
                books={this.state.books}
                onChangePage={history}
                handleUpdateBook={this.updateBook}
                isLoading={this.state.isLoading}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={({ history }) => (
              <PageSearchBooks
                books={this.state.apiBooks}
                onChangePage={history}
                handleUpdateBook={this.updateBook}
                searchBooks={this.searchBooks}
                clearSearchBooks={this.clearSearchBooks}
                isLoading={this.state.isLoading}
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
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
