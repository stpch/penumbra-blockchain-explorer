'use client';

import { Box, CheckCheck, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, useCallback } from 'react';
import { Transaction } from '../../../lib/types';
import Button from '../../button';
import Pill from '../../pill';
import Table from '../table';
import styles from './latestTransactionsTable.module.css';

interface Props {
  transactions: Transaction[];
  className?: string;
}

const LatestTransactionsTable: FC<Props> = props => {
  const router = useRouter();

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/transactions/${e.currentTarget.dataset.transactionId}`);
    },
    [router],
  );

  return (
    <Table
      title='Latest transactions'
      actions={<Button href='/transactions'>View all</Button>}
      className={props.className}
    >
      <thead>
        <tr>
          <th>Tx hash</th>
          <th>Block height</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.transactions.map(transaction => (
          <tr key={transaction.id} data-transaction-id={transaction.id} onClick={onRowClick}>
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
              <Pill>{transaction.latestAction}</Pill>
              {transaction.totalActions > 1 && (
                <span className={styles.moreActions}>+{transaction.totalActions - 1}</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LatestTransactionsTable;
