'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './transactionPanel.module.css';

export interface Props {
  className?: ReactNode;
}

const TransactionPanel: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>Transaction panel</div>
);

export default TransactionPanel;
