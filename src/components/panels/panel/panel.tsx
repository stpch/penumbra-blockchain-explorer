'use client';

import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import CountUp from 'react-countup';
import styles from './panel.module.css';

export interface Props {
  className?: ReactNode;
  children?: ReactNode;
  title: ReactNode;
  number: number;
  footer?: ReactNode;
  numberSuffix?: string;
}

const Panel: FC<Props> = props => (
  <section className={clsx(styles.root, props.className)}>
    <header className={styles.header}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.number}>
        <CountUp end={props.number} duration={1} suffix={props.numberSuffix} />
      </div>
    </header>
    {props.children && <div className={styles.chart}>{props.children}</div>}
    {props.footer && <footer className={styles.footer}>{props.footer}</footer>}
  </section>
);

export default Panel;
