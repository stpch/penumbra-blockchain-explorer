import { FC } from 'react';
import {
  BlockPanel,
  BlockTable,
  BurnPanel,
  Button,
  Container,
  TransactionPanel,
  TransactionTable,
} from '../components';
import { blocks, transactions } from '../lib/mocks';
import styles from './page.module.css';

const latestBlocks = blocks.slice(0, 10);
const latestTransactions = transactions.slice(0, 10);

const HomePage: FC = async () => {
  return (
    <Container>
      <div className={styles.dashboard}>
        <BlockPanel />
        <TransactionPanel />
        <BurnPanel />
        <BlockTable
          blocks={latestBlocks}
          title='Latest blocks'
          actions={<Button href='/blocks'>View all</Button>}
        />
        <TransactionTable
          transactions={latestTransactions}
          title='Latest transactions'
          actions={<Button href='/transactions'>View all</Button>}
        />
      </div>
    </Container>
  );
};

export default HomePage;
