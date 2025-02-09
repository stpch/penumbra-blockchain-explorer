import clsx from 'clsx';
import { ChevronsUpDown } from 'lucide-react';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import logo from '../../../lib/images/logo.png';
import { Tab, Tabs } from '../../client';
import styles from './navigationBar.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const NavigationBar: FC<Props> = props => (
  <header className={clsx(styles.root, props.className)}>
    <div className={styles.group}>
      <Image src={logo.src} alt='Noctis' width={120} height={33} />
      <div className={styles.dropdown}>
        <span>Marinnet</span>
        <ChevronsUpDown size={16} />
      </div>
    </div>
    <Tabs>
      <Tab href='/' label='Home' />
      <Tab href='/blocks' label='Blocks' />
      <Tab href='/transactions' label='Transactions' />
    </Tabs>
    <div className={styles.group}>
      <div className={styles.price}>
        <span className={styles.label}>UM Price:</span>
        <span>$0.98</span>
        <span className={styles.movement}>(+1.1%)</span>
      </div>
    </div>
  </header>
);

export default NavigationBar;
