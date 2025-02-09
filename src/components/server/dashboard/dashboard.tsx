import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { blocks, transactions } from '../../../lib/mocks';
import { shortenHash } from '../../../lib/utils';
import { BlockPanel, BurnPanel, TransactionPanel } from '../../client';
import { LatestBlocksTable, LatestTransactionsTable } from '../tables';
import styles from './dashboard.module.css';

const latestBlocks = blocks.slice(0, 10);

const latestTransactions = transactions.slice(0, 10).map(transaction => ({
  ...transaction,
  hash: shortenHash(transaction.hash),
}));

interface Props {
  children?: ReactNode;
  className?: string;
}

const Dashboard: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>
    <BlockPanel />
    <TransactionPanel />
    <BurnPanel />
    <LatestBlocksTable blocks={latestBlocks} />
    <LatestTransactionsTable transactions={latestTransactions} />
  </div>
);

export default Dashboard;
