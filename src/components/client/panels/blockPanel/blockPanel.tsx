'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './blockPanel.module.css';

export interface Props {
  className?: ReactNode;
}

const BlockPanel: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>Block panel</div>
);

export default BlockPanel;
