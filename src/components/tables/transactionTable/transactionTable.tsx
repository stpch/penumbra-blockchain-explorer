'use client';

import { Box, CheckCheck, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, ReactNode, useCallback } from 'react';
import { Transaction } from '../../../lib/types';
import Pill from '../../pill';
import Table from '../table';
import styles from './transactionTable.module.css';

interface Props {
  title?: string;
  actions?: ReactNode;
  transactions: Transaction[];
  className?: string;
  time?: boolean;
}

const TransactionTable: FC<Props> = props => {
  const router = useRouter();

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/transactions/${e.currentTarget.dataset.transactionId}`);
    },
    [router],
  );

  return (
    <Table className={props.className} title={props.title} actions={props.actions}>
      <thead>
        <tr>
          <th>Tx hash</th>
          <th>Block height</th>
          <th>Actions</th>
          {props.time && <th>Time</th>}
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
            {props.time && <td>{transaction.date.toISOString()}</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
