'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import Panel from '../panel';
import styles from './burnPanel.module.css';

export interface Props {
  className?: ReactNode;
}

const BurnPanel: FC<Props> = props => (
  <Panel
    className={clsx(styles.root, props.className)}
    title='Total burn'
    number={86990}
    footer='Average'
  >
    Burn panel
  </Panel>
);

export default BurnPanel;
