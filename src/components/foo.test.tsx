import { getByText, render } from '@testing-library/react';
import Foo from './foo';

describe('Foo', () => {
  test('renders suffix', async () => {
    const { container } = render(<Foo suffix='bar' />);
    getByText(container, 'Foo bar');
  });
});
