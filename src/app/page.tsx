import { FC } from 'react';
import { Foo } from '../components';

const HomePage: FC = () => {
  return (
    <Foo
      suffix='bar'
      className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
    />
  );
};

export default HomePage;
