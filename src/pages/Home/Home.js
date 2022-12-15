import { Title, Container } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Contact manager welcome page{' '}
        <img
          src="https://flexibits.com/img/new-fantastical/hero/cardhop/search.webp?updated=2022-09-09"
          alt="phone "
        />
      </Title>
    </Container>
  );
}
