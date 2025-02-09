import type { Metadata } from 'next';
import { FC } from 'react';
import { Breadcrumb, Breadcrumbs, Container } from '../../../components';
import { rootTitle } from '../../../lib/constants';

interface Props {
  params: Promise<{
    transactionId: string;
  }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => ({
  title: `Transaction ${(await props.params).transactionId} - ${rootTitle}`,
});

const TransactionDetailsPage: FC = async () => (
  <Container>
    <Breadcrumbs>
      <Breadcrumb href='/'>Explorer</Breadcrumb>
      <Breadcrumb href='/transactions'>Transactions</Breadcrumb>
    </Breadcrumbs>
  </Container>
);

export default TransactionDetailsPage;
