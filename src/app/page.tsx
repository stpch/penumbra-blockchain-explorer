import { FC } from 'react';
import {
  BlockPanel,
  BurnPanel,
  Container,
  LatestBlocksTable,
  LatestTransactionsTable,
  TransactionPanel,
} from '../components';
import { blocks, transactions } from '../lib/mocks';
import { shortenHash } from '../lib/utils';
import styles from './page.module.css';

const latestBlocks = blocks.slice(0, 10);

const latestTransactions = transactions.slice(0, 10).map(transaction => ({
  ...transaction,
  hash: shortenHash(transaction.hash),
}));

const HomePage: FC = async () => {
  return (
    <Container>
      <div className={styles.dashboard}>
        <BlockPanel />
        <TransactionPanel />
        <BurnPanel />
        <LatestBlocksTable blocks={latestBlocks} />
        <LatestTransactionsTable transactions={latestTransactions} />
      </div>
    </Container>
  );
};

export default HomePage;
