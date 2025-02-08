'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import Panel from '../panel';
import styles from './blockPanel.module.css';

export interface Props {
  className?: ReactNode;
}

const BlockPanel: FC<Props> = props => (
  <Panel
    className={clsx(styles.root, props.className)}
    title='Current block'
    number={3538663}
    footer='Block time ~12s'
  >
    Block panel
  </Panel>
);

export default BlockPanel;
