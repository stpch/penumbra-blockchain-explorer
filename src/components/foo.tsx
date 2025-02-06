import Link from 'next/link';
import { FC } from 'react';

interface Props {
  className?: string;
  suffix: string;
}

const Foo: FC<Props> = props => (
  <Link className={props.className} href='/'>
    Foo {props.suffix}
  </Link>
);

export default Foo;
