'use client';

import { Box, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, useCallback } from 'react';
import { Block } from '../../../lib/types';
import Table from '../table';

interface Props {
  items: Block[];
  totalItems: number;
  itemsPerPage: number;
  page: number;
  className?: string;
}

const BlocksTable: FC<Props> = props => {
  const router = useRouter();

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/blocks/${e.currentTarget.dataset.itemId}`);
    },
    [router],
  );

  return (
    <Table className={props.className} alignLastRight>
      <thead>
        <tr>
          <th>Block height</th>
          <th>Time</th>
          <th>Proposer</th>
          <th>Txs</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map(block => (
          <tr key={block.id} data-item-id={block.id} onClick={onRowClick}>
            <td>
              <Box size={16} color='var(--textSecondary)' />
              <span>{block.height}</span>
            </td>
            <td>{block.date.toISOString()}</td>
            <td>
              <span>{block.id}</span>
              <Copy size={14} color='var(--textSecondary)' />
            </td>
            <td>{block.transactions}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BlocksTable;
