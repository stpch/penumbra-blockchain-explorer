import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Panel from '../panel';
import styles from './burnPanel.module.css';
import icon from './burnPanelIcon.png';

export interface Props {
  className?: ReactNode;
}

const BurnPanel: FC<Props> = props => (
  <Panel
    className={clsx(styles.root, props.className)}
    title={
      <>
        <Image src={icon.src} alt='Total burn' width={24} height={24} />
        <span>Total burn</span>
      </>
    }
    number={86990}
    footer='Average'
  >
    Burn panel
  </Panel>
);

export default BurnPanel;
