import type { Metadata } from 'next';
import { FC } from 'react';
import { BlocksTable, Container } from '../../components';
import { rootTitle } from '../../lib/constants';
import { blocks } from '../../lib/mocks';

const page = 0;
const itemsPerPage = 20;
const start = page * itemsPerPage;
const items = blocks.slice(start, start + itemsPerPage);

export const metadata: Metadata = {
  title: `Blocks - ${rootTitle}`,
};

const BlocksPage: FC = async () => (
  <Container>
    <BlocksTable items={items} itemsPerPage={itemsPerPage} totalItems={blocks.length} page={page} />
  </Container>
);

export default BlocksPage;
