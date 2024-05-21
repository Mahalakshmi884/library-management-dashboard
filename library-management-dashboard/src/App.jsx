import React, { useState } from 'react';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const handleBookSubmit = (values, { setSubmitting, resetForm }) => {
    if (currentBook !== null) {
      const updatedBooks = books.map((book, index) => (index === currentBook ? values : book));
      setBooks(updatedBooks);
      setCurrentBook(null);
    } else {
      setBooks([...books, values]);
    }
    resetForm();
    setSubmitting(false);
  };

  const handleAuthorSubmit = (values, { setSubmitting, resetForm }) => {
    if (currentAuthor !== null) {
      const updatedAuthors = authors.map((author, index) => (index === currentAuthor ? values : author));
      setAuthors(updatedAuthors);
      setCurrentAuthor(null);
    } else {
      setAuthors([...authors, values]);
    }
    resetForm();
    setSubmitting(false);
  };

  const editBook = (index) => {
    setCurrentBook(index);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const editAuthor = (index) => {
    setCurrentAuthor(index);
  };

  const deleteAuthor = (index) => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  return (
    <div className="app-container">
      <h1>Library Management Dashboard</h1>
      <div className="form-container">
        <BookForm onSubmit={handleBookSubmit} />
        <AuthorForm onSubmit={handleAuthorSubmit} />
      </div>
      <div className="list-container">
        <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
        <AuthorList authors={authors} onEdit={editAuthor} onDelete={deleteAuthor} />
      </div>
    </div>
  );
};

export default App;
