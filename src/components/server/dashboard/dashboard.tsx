import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { blocks } from '../../../lib/mocks';
import { BlockPanel, BurnPanel, TransactionPanel } from '../../client';
import Table from '../table';
import styles from './dashboard.module.css';

const latestBlocks = blocks.slice(0, 10);

interface Props {
  children?: ReactNode;
  className?: string;
}

const Dashboard: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>
    <BlockPanel />
    <TransactionPanel />
    <BurnPanel />
    <Table title='Latest blocks' actions={<Link href='/blocks'>View all</Link>}>
      <thead>
        <tr>
          <th>Block height</th>
          <th>Time</th>
          <th>Txs</th>
        </tr>
      </thead>
      <tbody>
        {latestBlocks.map(block => (
          <tr key={block.id}>
            <td>{block.height}</td>
            <td>{block.date.toLocaleTimeString()}</td>
            <td>{block.transactions}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Table title='Latest transactions' actions={<Link href='/transactions'>View all</Link>}>
      <thead>
        <tr>
          <th>Tx hash</th>
          <th>Block height</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>Swap claim</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>Undeledate claim</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>Withdraw from a Dutch auction</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>End a Dutch auction</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>Withdraw from a Dutch auction</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>End a Dutch auction</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>Undelegate</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>Delegate</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>Schedule a Dutch auction</td>
        </tr>
        <tr>
          <td>f3a4b8d0...76a1c092</td>
          <td>1,057,456</td>
          <td>ics20 withdrawal</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default Dashboard;
