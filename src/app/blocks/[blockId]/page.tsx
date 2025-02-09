import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import {
  Breadcrumb,
  Breadcrumbs,
  Container,
  DataList,
  DataListItem,
  TransactionTable,
} from '../../../components';
import View from '../../../components/views/view';
import { rootTitle } from '../../../lib/constants';
import { blocks, transactions } from '../../../lib/mocks';
import { shortenHash } from '../../../lib/utils';

const latestTransactions = transactions.slice(0, 10).map(transaction => ({
  ...transaction,
  hash: shortenHash(transaction.hash),
}));

interface Props {
  params: Promise<{
    blockId: string;
  }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => ({
  title: `Block ${(await props.params).blockId} - ${rootTitle}`,
});

const BlockViewPage: FC<Props> = async props => {
  const params = await props.params;
  const block = blocks.find(b => b.id === params.blockId);

  if (!block) {
    notFound();
  }

  return (
    <Container>
      <Breadcrumbs>
        <Breadcrumb href='/'>Explorer</Breadcrumb>
        <Breadcrumb href='/blocks'>Blocks</Breadcrumb>
      </Breadcrumbs>
      <View title='Block view' subtitle='1,057,456'>
        <DataList>
          <DataListItem name='Block height'>{block.height}</DataListItem>
          <DataListItem name='Time'>{block.date.toISOString()}</DataListItem>
          <DataListItem name='Proposer'>Foo</DataListItem>
          <DataListItem name='Txs'>{block.transactions}</DataListItem>
        </DataList>
        <TransactionTable transactions={latestTransactions} />
      </View>
    </Container>
  );
};

export default BlockViewPage;
