/* istanbul ignore file */
import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Tab, Tabs } from '../tabs';
import styles from './navigationBar.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const NavigationBar: FC<Props> = props => (
  <header className={clsx(styles.root, props.className)}>
    <Image src='/logo.png' alt='Noctis' width={120} height={33} />
    <Tabs>
      <Tab href='/' label='Home' />
      <Tab href='/blocks' label='Blocks' />
      <Tab href='/transactions' label='Transactions' />
    </Tabs>
    <div>TODO: Search and price</div>
  </header>
);

export default NavigationBar;
