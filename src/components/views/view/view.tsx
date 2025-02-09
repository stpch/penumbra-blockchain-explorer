import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './view.module.css';

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

const View: FC<Props> = props => (
  <article className={clsx(styles.root, props.className)}>
    <header className={styles.header}>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.subtitle}>{props.subtitle}</div>
    </header>
    {props.children}
  </article>
);

export default View;
