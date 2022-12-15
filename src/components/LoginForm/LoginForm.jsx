// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Label, Box, Title, Input, I, Button } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
          <I></I>
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
          <I></I>
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </Box>
  );
};

//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };
