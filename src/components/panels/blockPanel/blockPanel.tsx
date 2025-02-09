import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Panel from '../panel';
import styles from './blockPanel.module.css';
import icon from './blockPanelIcon.svg';

export interface Props {
  className?: ReactNode;
}

const BlockPanel: FC<Props> = props => (
  <Panel
    className={clsx(styles.root, props.className)}
    title={
      <>
        <Image src={icon.src} alt='Current block' width={icon.width} height={icon.height} />
        <span>Current block</span>
      </>
    }
    number={3538663}
    footer='Block time ~12s'
  >
    Block panel
  </Panel>
);

export default BlockPanel;
