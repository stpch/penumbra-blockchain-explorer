import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './table.module.css';

interface Props {
  children: ReactNode;
  className?: string;
  title?: string;
  actions?: ReactNode;
  footer?: ReactNode;
}

const Table: FC<Props> = props => (
  <section className={clsx(styles.root, props.className)}>
    {Boolean(props.title || props.actions) && (
      <header className={styles.header}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.actions}>{props.actions}</div>
      </header>
    )}
    <table className={styles.table}>{props.children}</table>
    {props.footer && <footer className={styles.footer}>{props.footer}</footer>}
  </section>
);

export default Table;
