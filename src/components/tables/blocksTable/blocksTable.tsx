'use client';

import { Box, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, useCallback, useMemo } from 'react';
import { Block } from '../../../lib/types';
import Table from '../table';

const itemsPerPage = 20;

interface Props {
  blocks: Block[];
  className?: string;
}

const BlocksTable: FC<Props> = props => {
  const router = useRouter();

  const paginatedBlocks = useMemo(() => props.blocks.slice(0, itemsPerPage), [props.blocks]);

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/blocks/${e.currentTarget.dataset.blockId}`);
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
        {paginatedBlocks.map(block => (
          <tr key={block.id} data-block-id={block.id} onClick={onRowClick}>
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
