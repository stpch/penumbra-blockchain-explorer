'use client';

import { Box } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, useCallback } from 'react';
import { Block } from '../../../lib/types';
import Button from '../../button';
import Table from '../table';

interface Props {
  blocks: Block[];
  className?: string;
}

const LatestBlocksTable: FC<Props> = props => {
  const router = useRouter();

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/blocks/${e.currentTarget.dataset.blockId}`);
    },
    [router],
  );

  return (
    <Table
      title='Latest blocks'
      actions={<Button href='/blocks'>View all</Button>}
      alignLastRight
      className={props.className}
    >
      <thead>
        <tr>
          <th>Block height</th>
          <th>Time</th>
          <th>Txs</th>
        </tr>
      </thead>
      <tbody>
        {props.blocks.map(block => (
          <tr key={block.id} data-block-id={block.id} onClick={onRowClick}>
            <td>
              <Box size={16} color='var(--textSecondary)' />
              <span>{block.height}</span>
            </td>
            <td>{block.date.toISOString()}</td>
            <td>{block.transactions}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LatestBlocksTable;
