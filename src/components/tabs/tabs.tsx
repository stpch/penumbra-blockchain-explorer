/* istanbul ignore file */
'use client';

import clsx from 'clsx';
import { FC, ReactElement, useCallback, useRef } from 'react';
import { Props as TabProps } from './tab';
import styles from './tabs.module.css';

interface Props {
  children?: (
    onTabActive: (label: string) => void,
  ) =>
    | ReactElement<TabProps>
    | Array<ReactElement<TabProps> | Array<ReactElement<TabProps>> | false | null | undefined>;
  className?: string;
}

const Tabs: FC<Props> = props => {
  const root = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLDivElement>(null);

  const onTabActive = useCallback((label: string) => {
    if (!root.current || !indicator.current) {
      return;
    }

    const tab = Array.from(root.current.childNodes).find(node => node.textContent === label) as
      | HTMLElement
      | undefined;

    if (tab) {
      indicator.current.style.transform = `translateX(${tab.offsetLeft}px)`;
      indicator.current.style.width = `${tab.offsetWidth}px`;

      if (indicator.current.style.height) {
        return;
      }

      setTimeout(() => {
        if (indicator.current) {
          indicator.current.style.height = '2px';
        }
      }, 200);
    }
  }, []);

  return (
    <nav className={clsx(styles.root, props.className)} ref={root}>
      <div ref={indicator} className={styles.indicator} />
      {typeof props.children === 'function' && props.children(onTabActive)}
    </nav>
  );
};

export default Tabs;
