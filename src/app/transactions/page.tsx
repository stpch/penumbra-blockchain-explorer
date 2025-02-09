import type { Metadata } from 'next';
import { FC } from 'react';
import { Breadcrumb, Breadcrumbs, Container, TransactionTable } from '../../components';
import { rootTitle } from '../../lib/constants';
import { transactions } from '../../lib/mocks';

const paginatedTransactions = transactions.slice(0, 20);

export const metadata: Metadata = {
  title: `Transactions - ${rootTitle}`,
};

const TransactionsPage: FC = async () => (
  <Container>
    <Breadcrumbs>
      <Breadcrumb href='/'>Explorer</Breadcrumb>
      <Breadcrumb>Transactions</Breadcrumb>
    </Breadcrumbs>
    <TransactionTable transactions={paginatedTransactions} time />
  </Container>
);

export default TransactionsPage;
