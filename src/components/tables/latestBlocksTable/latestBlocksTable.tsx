import { Box } from 'lucide-react';
import { FC } from 'react';
import { Block } from '../../../lib/types';
import Button from '../../button';
import Table from '../table';

interface Props {
  blocks: Block[];
  className?: string;
}

const LatestBlocksTable: FC<Props> = props => (
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
);

export default LatestBlocksTable;
