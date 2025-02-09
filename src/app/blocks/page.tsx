import type { Metadata } from 'next';
import { FC } from 'react';
import { BlockTable, Breadcrumb, Breadcrumbs, Container } from '../../components';
import { rootTitle } from '../../lib/constants';
import { blocks } from '../../lib/mocks';

const paginatedBlocks = blocks.slice(0, 20);

export const metadata: Metadata = {
  title: `Blocks - ${rootTitle}`,
};

const BlocksPage: FC = async () => (
  <Container>
    <Breadcrumbs>
      <Breadcrumb href='/'>Explorer</Breadcrumb>
      <Breadcrumb>Blocks</Breadcrumb>
    </Breadcrumbs>
    <BlockTable blocks={paginatedBlocks} proposer />
  </Container>
);

export default BlocksPage;
