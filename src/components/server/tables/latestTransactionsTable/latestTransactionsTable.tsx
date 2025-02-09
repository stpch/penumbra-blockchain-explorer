import { Box, CheckCheck, Copy } from 'lucide-react';
import { FC } from 'react';
import { Transaction } from '../../../../lib/types';
import { Button } from '../../../client';
import Pill from '../../pill';
import Table from '../table';

interface Props {
  transactions: Transaction[];
  className?: string;
}

const LatestTransactionsTable: FC<Props> = props => (
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
);

export default LatestTransactionsTable;
