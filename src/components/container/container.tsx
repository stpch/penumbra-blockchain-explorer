/* istanbul ignore file */
import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './container.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const Container: FC<Props> = props => (
  <div className={clsx(styles.root, props.className)}>{props.children}</div>
);

export default Container;
