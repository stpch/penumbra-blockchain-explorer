import clsx from 'clsx';
import { Box, CheckCheck, Copy } from 'lucide-react';
import { FC, ReactNode } from 'react';
import { blocks, transactions } from '../../../lib/mocks';
import { shortenHash } from '../../../lib/utils';
import { BlockPanel, BurnPanel, Button, TransactionPanel } from '../../client';
import Pill from '../pill';
import Table from '../table';
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
    <Table title='Latest blocks' actions={<Button href='/blocks'>View all</Button>} alignLastRight>
      <thead>
        <tr>
          <th>Block height</th>
          <th>Time</th>
          <th>Txs</th>
        </tr>
      </thead>
      <tbody>
        {latestBlocks.map(block => (
          <tr key={block.id}>
            <td>
              <Box size={16} color='var(--textSecondary)' />
              <span>{block.height}</span>
            </td>
            <td>{block.date.toLocaleTimeString()}</td>
            <td>{block.transactions}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Table title='Latest transactions' actions={<Button href='/transactions'>View all</Button>}>
      <thead>
        <tr>
          <th>Tx hash</th>
          <th>Block height</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {latestTransactions.map(transaction => (
          <tr key={transaction.id}>
            <td>
              <CheckCheck size={14} color='var(--secondaryLight)' />
              <span>{transaction.hash}</span>
              <Copy size={14} color='var(--textSecondary)' />
            </td>
            <td>
              <Box size={16} color='var(--textSecondary)' />
              <span>{transaction.blockHeight}</span>
            </td>
            <td>
              <Pill>withdraw from a dutch auction and be careful</Pill>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default Dashboard;
