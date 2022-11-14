import * as Yup from 'yup'

export const loginFormValidation = Yup.object({
    username: Yup.string()
      .matches(/^[a-zA-Z0-9]*$/, 'Username should be alphanumeric.')
      .required('Username is required.'),
    password: Yup.string()
      .matches(
        /[^&^$#]+$/,
        'Password should not contain any of these characters (&,^,$,#).'
      )
      .required('Password is required.')
  })