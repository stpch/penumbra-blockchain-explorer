'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './burnPanel.module.css';

export interface Props {
  className?: ReactNode;
}

const BurnPanel: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>Transaction panel</div>
);

export default BurnPanel;
