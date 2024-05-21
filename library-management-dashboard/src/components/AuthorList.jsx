import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => (
  <div>
    <h2>Author List</h2>
    <ul>
      {authors.map((author, index) => (
        <li key={index}>
          <span>{author.name}</span>
          <div>
            <button className="edit-button" onClick={() => onEdit(index)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default AuthorList;
