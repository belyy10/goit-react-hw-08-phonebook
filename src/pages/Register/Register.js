import { Helmet } from 'react-helmet';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm.jsx';
import { Container } from './Register.styled.js';

export default function Register() {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
}
