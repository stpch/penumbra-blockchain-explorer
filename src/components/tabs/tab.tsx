/* istanbul ignore file */
'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, useEffect } from 'react';
import nextConfig from '../../../next.config';
import styles from './tabs.module.css';

export interface Props {
  children?: ReactNode;
  href: string;
  label: string;
  onActive: (label: string) => void;
}

const Tab: FC<Props> = props => {
  const pathname = usePathname();
  const root = `${nextConfig.basePath}/`;
  const active = props.href === root ? pathname === root : pathname.startsWith(props.href);

  useEffect(() => {
    if (active) {
      props.onActive.call(undefined, props.label);
    }
  }, [active, props.label, props.onActive]);

  return (
    <Link href={props.href} className={clsx(styles.tab, active && styles.active)}>
      {props.label}
    </Link>
  );
};

export default Tab;
