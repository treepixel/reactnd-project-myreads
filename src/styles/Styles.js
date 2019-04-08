import styled from 'styled-components';
import imgArrowDown from '../icons/arrow-drop-down.svg';
import imgArrowBack from '../icons/arrow-back.svg';
import imgAdd from '../icons/add.svg';

export const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* align items in Main Axis */
  align-items: stretch; /* align items in Cross Axis */
  align-content: stretch; /* Extra space in Cross Axis */
`;

export const Title = styled.div`
  padding: 10px 0;
  background: #2e7c31;
  text-align: center;

  h1 {
    font-weight: 400;
    margin: 0;
    color: white;
  }

  button {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 58px;
    height: 58px;
    background-image: url(${imgArrowBack});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    border: none;
    outline: none;
  }
`;

export const Content = styled.div`
  padding: ${props => props.padding};
  flex: 1;
`;

export const BookInfo = styled.div`
  display: flex;

  img {
    margin-right: 20px;
    width: 128px;
    height: 188px;
  }
`;

export const BookResume = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1;
  }
  h5 {
    margin: 10px 0;
  }
`;

export const Description = styled.div`
  border-top: '1px solid #ccc';
  margin-top: '20px' h5 {
    margin-top: 10px;
  }
  p {
    text-align: justify;
  }
`;

export const OpenSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;

  button {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2e7d32;
    background-image: url(${imgAdd});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    font-size: 0;
    outline: 0;
  }
  &:hover {
    button {
      background-color: rgb(0, 102, 0);
    }
  }
`;

export const BookShelf = styled.div`
  padding: 0 10px 20px;

  h2 {
    border-bottom: 1px solid #dedede;
  }

  .bookshelf-books {
    text-align: center;
  }

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

export const BooksGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    padding: 10px 15px;
    text-align: left;
  }
`;

export const Book = styled.div`
  width: 140px;
  .book-title,
  .book-authors {
    font-size: 0.8em;
  }

  .book-title {
    margin-top: 10px;
  }

  .book-authors {
    color: #999;
  }

  .book-top {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
  }

  .book-shelf-changer {
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #60ac5d;
    background-image: url(${imgArrowDown});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .book-shelf-changer select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  /* book cover */

  .book-cover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: #eee;
  }

  .book-cover-title {
    padding: 20px 10px 0;
    text-align: center;
    font-size: 0.8em;
  }
`;

export const SearchBooks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* align items in Main Axis */
  align-items: stretch; /* align items in Cross Axis */
  align-content: stretch; /* Extra space in Cross Axis */
  .search-books-bar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
  }

  .search-books-input-wrapper {
    flex: 1;
    background: #e9e;
  }

  .search-books-bar input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }

  .close-search {
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background-image: url(${imgArrowBack});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    border: none;
    outline: none;
  }

  .search-books-results {
    padding: 80px 10px 20px;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
