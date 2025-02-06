import { FC } from 'react';

interface Props {
  className?: string;
  suffix: string;
}

const Foo: FC<Props> = props => <div className={props.className}>Foo {props.suffix}</div>;

export default Foo;
