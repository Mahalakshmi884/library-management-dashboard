import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit }) => {
  const initialValues = {
    name: 'J.K. Rowling',
    birthDate: '1965-07-31',
    biography: 'J.K. Rowling is a British author, best known for writing the Harry Potter fantasy series. The books have won multiple awards, and sold more than 500 million copies, becoming the best-selling book series in history. They have also been the basis for a popular series of films.'
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required')
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="birthDate">Birth Date</label>
            <Field name="birthDate" type="date" />
            <ErrorMessage name="birthDate" component="div" />
          </div>
          <div>
            <label htmlFor="biography">Biography</label>
            <Field name="biography" as="textarea" />
            <ErrorMessage name="biography" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
