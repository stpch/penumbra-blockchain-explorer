/* istanbul ignore file */
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import nextConfig from '../../../../next.config';
import Container from '../container';
import styles from './navigationBar.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const NavigationBar: FC<Props> = props => (
  <Container>
    <header className={clsx(styles.root, props.className)}>
      <Image src={`${nextConfig.basePath}/logo.png`} alt='Noctis' width={120} height={33} />
      <Link href='/'>Home</Link>
      <Link href='/blocks'>Blocks</Link>
      <Link href='/transactions'>Transactions</Link>
    </header>
  </Container>
);

export default NavigationBar;
