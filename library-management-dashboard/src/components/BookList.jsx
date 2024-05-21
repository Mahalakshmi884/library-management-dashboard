import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => (
  <div>
    <h2>Book List</h2>
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <span>{book.title} by {book.author}</span>
          <div>
            <button className="edit-button" onClick={() => onEdit(index)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;
