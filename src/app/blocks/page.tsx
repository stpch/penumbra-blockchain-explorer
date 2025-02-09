import type { Metadata } from 'next';
import { FC } from 'react';
import { BlocksTable, Container } from '../../components';
import { rootTitle } from '../../lib/constants';
import { blocks } from '../../lib/mocks';

export const metadata: Metadata = {
  title: `Blocks - ${rootTitle}`,
};

const BlocksPage: FC = async () => {
  return (
    <Container>
      <BlocksTable blocks={blocks} />
    </Container>
  );
};

export default BlocksPage;
