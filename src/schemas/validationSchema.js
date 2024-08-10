import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name cannot be longer than 30 characters'),
  email: Yup.string()
    .matches(emailRegex, 'Invalid email address')
    .email('Invalid email address')
    .required('Email is required'),
  date: Yup.date()
    .transform((value, originalValue) => (originalValue ? new Date(originalValue) : null))
    .nullable()
    .required('Date is required')
    .typeError('Invalid date format'),
  comment: Yup.string(),
});
