'use client';

import { Box, CheckCheck, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, useCallback } from 'react';
import { Transaction } from '../../../lib/types';
import Pill from '../../pill';
import styles from '../latestTransactionsTable/latestTransactionsTable.module.css';
import Table from '../table';

interface Props {
  items: Transaction[];
  totalItems: number;
  itemsPerPage: number;
  page: number;
  className?: string;
}

const TransactionsTable: FC<Props> = props => {
  const router = useRouter();

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/transactions/${e.currentTarget.dataset.itemId}`);
    },
    [router],
  );

  return (
    <Table className={props.className}>
      <thead>
        <tr>
          <th>Tx hash</th>
          <th>Block height</th>
          <th>Actions</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map(transaction => (
          <tr key={transaction.id} data-item-id={transaction.id} onClick={onRowClick}>
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
            <td>{transaction.date.toISOString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionsTable;
