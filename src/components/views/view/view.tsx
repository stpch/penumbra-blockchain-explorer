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
    <header>
      <h4>{props.title}</h4>
    </header>
    {props.children}
  </article>
);

export default View;
