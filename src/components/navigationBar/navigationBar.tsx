/* istanbul ignore file */
'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import nextConfig from '../../../next.config';
import Container from '../container';
import { Tab, Tabs } from '../tabs';
import styles from './navigationBar.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const NavigationBar: FC<Props> = props => (
  <Container>
    <header className={clsx(styles.root, props.className)}>
      <Image src={`${nextConfig.basePath}/logo.png`} alt='Noctis' width={120} height={33} />
      <Tabs>
        {onTabActive => (
          <>
            <Tab href='/' label='Home' onActive={onTabActive} />
            <Tab href='/blocks' label='Blocks' onActive={onTabActive} />
            <Tab href='/transactions' label='Transactions' onActive={onTabActive} />
          </>
        )}
      </Tabs>
      <div>TODO: Search and price</div>
    </header>
  </Container>
);

export default NavigationBar;
