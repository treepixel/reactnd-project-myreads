[![REACT nanodegree](https://img.shields.io/badge/udacity-REACTND-02b3e4.svg?style=flat)](https://www.udacity.com/course/react-nanodegree--nd019)

# MyReads Project

This is my final assessment project for the Udacity's React Fundamentals course, part of the [React Nanodegree Program](https://udacity.com/course/nd019). MyReads project was built with React and React Router, you'll find an app that allows you to select and categorize books you have read, are currently reading, or want to read. This app allows you to search more books from the API booksAPI.js.

# Demo

![](screen.gif)

## API

This applications consumes data from an API designed specifically for the assignment: [reactnd-books-api.udacity.com](https://reactnd-books-api.udacity.com/).

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

- **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)
- **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install)

### Installing

To download the project follow the instructions bellow:

```
git clone https://github.com/treepixel/reactnd-project-myreads
cd myreads
```

Then install dependencies and run:

```
yarn install
yarn start
```

or

```
npm install
npm run start
```

## Running Tests

For testing components I have used [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/). Just follow the instructions bellow to run the tests:

```
yarn test
```

or

```
npm run test
```

## Versions

v1.0

- Default project implementation

## Authors

Antonio Rodrigues

- [https://github.com/treepixel](https://github.com/treepixel)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/treepixel/reactnd-project-myreads/LICENSE.md) file for details
