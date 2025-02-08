import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { BlockPanel } from '../../client';
import styles from './dashboard.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const Dashboard: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>
    <BlockPanel />
  </div>
);

export default Dashboard;
