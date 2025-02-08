'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './panel.module.css';

export interface Props {
  className?: ReactNode;
  children?: ReactNode;
  title: string;
  number: number;
  footer?: ReactNode;
}

const Panel: FC<Props> = props => (
  <section className={clsx(styles.root, props.className)}>
    <header className={styles.header}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.number}>{props.number}</div>
    </header>
    {props.children && <div className={styles.chart}>{props.children}</div>}
    {props.footer && <footer className={styles.footer}>{props.footer}</footer>}
  </section>
);

export default Panel;
