import { FC } from 'react';

interface Props {
  suffix: string;
}

const Foo: FC<Props> = props => <div>Foo {props.suffix}</div>;

export default Foo;
