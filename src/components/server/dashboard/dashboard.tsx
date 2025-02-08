import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { BlockPanel, BurnPanel, TransactionPanel } from '../../client';
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
  </div>
);

export default Dashboard;
