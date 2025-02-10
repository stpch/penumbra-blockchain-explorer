'use client';

import { Box, CheckCheck, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, ReactNode, useCallback } from 'react';
import { timezone } from '../../../lib/constants';
import dayjs from '../../../lib/dayjs';
import { Transaction } from '../../../lib/types';
import { formatNumber, shortenHash } from '../../../lib/utils';
import Pill from '../../pill';
import Table from '../table';
import styles from './transactionTable.module.css';

interface Props {
  actions?: ReactNode;
  className?: string;
  time?: boolean;
  title?: string;
  transactions: Transaction[];
}

const TransactionTable: FC<Props> = props => {
  const router = useRouter();

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/transactions/${e.currentTarget.dataset.transactionId}`);
    },
    [router],
  );

  const now = dayjs().tz(timezone);

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
          <tr
            key={transaction.id}
            data-transaction-id={transaction.id}
            onClick={onRowClick}
            className={styles.dataRow}
          >
            <td>
              <CheckCheck size={14} color='var(--secondaryLight)' />
              <span>{shortenHash(transaction.hash)}</span>
              <Copy size={14} color='var(--textSecondary)' />
            </td>
            <td>
              <Box size={16} color='var(--textSecondary)' />
              <span>{formatNumber(transaction.blockHeight)}</span>
            </td>
            <td>
              <Pill>{transaction.latestAction}</Pill>
              {transaction.totalActions > 1 && (
                <span className={styles.moreActions}>+{transaction.totalActions - 1}</span>
              )}
            </td>
            {props.time && <td>{now.to(dayjs(transaction.date))}</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
