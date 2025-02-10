'use client';

import { Box, Copy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, MouseEvent, ReactNode, useCallback } from 'react';
import dayjs from '../../../lib/dayjs';
import { Block } from '../../../lib/types';
import Table from '../table';
import styles from './blockTable.module.css';

interface Props {
  blocks: Block[];
  className?: string;
  title?: string;
  actions?: ReactNode;
  proposer?: boolean;
}

const BlockTable: FC<Props> = props => {
  const router = useRouter();

  const onRowClick = useCallback(
    (e: MouseEvent<HTMLTableRowElement>) => {
      router.push(`/blocks/${e.currentTarget.dataset.blockId}`);
    },
    [router],
  );

  const now = dayjs();

  return (
    <Table className={props.className} alignLastRight title={props.title} actions={props.actions}>
      <thead>
        <tr>
          <th>Block height</th>
          <th>Time</th>
          {props.proposer && <th>Proposer</th>}
          <th>Txs</th>
        </tr>
      </thead>
      <tbody>
        {props.blocks.map(block => (
          <tr
            key={block.id}
            data-block-id={block.id}
            onClick={onRowClick}
            className={styles.dataRow}
          >
            <td>
              <Box size={16} color='var(--textSecondary)' />
              <span>{block.height}</span>
            </td>
            <td>{now.to(block.date)}</td>
            {props.proposer && (
              <td>
                <span>{block.proposer}</span>
                <Copy size={14} color='var(--textSecondary)' />
              </td>
            )}
            <td>{block.transactions}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BlockTable;
