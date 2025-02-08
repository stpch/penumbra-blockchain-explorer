import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { BlockPanel, BurnPanel, TransactionPanel } from '../../client';
import Table from '../table';
import styles from './dashboard.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const Dashboard: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>
    <BlockPanel />
    <TransactionPanel />
    <BurnPanel />
    <Table title='Latest blocks' actions='View all' footer='Footer'>
      Latest blocks table
    </Table>
    <Table title='Latest transactions' actions='View all' footer='Footer'>
      Latest translations table
    </Table>
  </div>
);

export default Dashboard;
