import { FC } from 'react';
import { Container, Dashboard } from '../components/server';

const HomePage: FC = async () => {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
};

export default HomePage;
