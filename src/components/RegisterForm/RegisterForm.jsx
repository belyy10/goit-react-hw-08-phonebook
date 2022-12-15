import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  Label,
  Box,
  Title,
  Input,
  I,
  Button,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" />
          <I></I>
        </Label>
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

        <Button type="submit">Register</Button>
      </Form>
    </Box>
  );
};
