import type { Metadata } from 'next';
import { FC } from 'react';
import { Breadcrumb, Breadcrumbs, Container, TransactionsTable } from '../../components';
import { rootTitle } from '../../lib/constants';
import { blocks, transactions } from '../../lib/mocks';

const page = 0;
const itemsPerPage = 20;
const start = page * itemsPerPage;
const items = transactions.slice(start, start + itemsPerPage);

export const metadata: Metadata = {
  title: `Transactions - ${rootTitle}`,
};

const TransactionsPage: FC = async () => (
  <Container>
    <Breadcrumbs>
      <Breadcrumb href='/'>Explorer</Breadcrumb>
      <Breadcrumb>Transactions</Breadcrumb>
    </Breadcrumbs>
    <TransactionsTable
      items={items}
      itemsPerPage={itemsPerPage}
      totalItems={blocks.length}
      page={page}
    />
  </Container>
);

export default TransactionsPage;
