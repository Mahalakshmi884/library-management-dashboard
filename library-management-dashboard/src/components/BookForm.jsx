import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit }) => {
  const initialValues = {
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    isbn: '9780743273565',
    publicationDate: '1925-04-10'
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN number is required'),
    publicationDate: Yup.date().required('Publication date is required')
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label htmlFor="isbn">ISBN</label>
            <Field name="isbn" type="text" />
            <ErrorMessage name="isbn" component="div" />
          </div>
          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
