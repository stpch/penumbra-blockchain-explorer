'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import Panel from '../panel';
import styles from './transactionPanel.module.css';

export interface Props {
  className?: ReactNode;
}

const TransactionPanel: FC<Props> = props => (
  <Panel
    className={clsx(styles.root, props.className)}
    title='Total transactions'
    number={28057456}
    footer='68,499 new today'
  >
    Transaction panel
  </Panel>
);

export default TransactionPanel;
