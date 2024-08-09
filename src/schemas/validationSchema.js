import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name cannot be longer than 30 characters'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.date()
    .transform((value, originalValue) => (originalValue ? new Date(originalValue) : null))
    .nullable()
    .required('Date is required')
    .typeError('Invalid date format'),
  comment: Yup.string(),
});
