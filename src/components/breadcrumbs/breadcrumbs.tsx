import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import { Children, FC, ReactElement } from 'react';
import { Props as BreadcrumbProps } from './breadcrumb';
import styles from './breadcrumbs.module.css';

interface Props {
  children:
    | ReactElement<BreadcrumbProps>
    | Array<
        | ReactElement<BreadcrumbProps>
        | Array<ReactElement<BreadcrumbProps>>
        | false
        | null
        | undefined
      >;
  className?: string;
}

const Breadcrumbs: FC<Props> = props => {
  const lastIndex = Children.count(props.children) - 1;

  return (
    <nav className={clsx(styles.root, props.className)}>
      {Children.map(props.children, (child, index) => (
        <>
          {child}
          {index < lastIndex && <ChevronRight size={24} className={styles.separator} />}
        </>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
