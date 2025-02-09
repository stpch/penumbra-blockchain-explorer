'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Panel from '../panel';
import styles from './transactionPanel.module.css';
import icon from './transactionPanelIcon.svg';

export interface Props {
  className?: ReactNode;
}

const TransactionPanel: FC<Props> = props => (
  <Panel
    className={clsx(styles.root, props.className)}
    title={
      <>
        <Image src={icon.src} alt='Total transactions' width={icon.width} height={icon.height} />
        <span>Total transactions</span>
      </>
    }
    number={28057456}
    footer='68,499 new today'
  >
    Transaction panel
  </Panel>
);

export default TransactionPanel;
