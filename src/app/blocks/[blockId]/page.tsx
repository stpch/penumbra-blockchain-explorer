import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import { BlockView, Breadcrumb, Breadcrumbs, Container } from '../../../components';
import { rootTitle } from '../../../lib/constants';
import { blocks, transactions } from '../../../lib/mocks';

const latestTransactions = transactions.slice(0, 10);

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
    <Container narrow>
      <Breadcrumbs>
        <Breadcrumb href='/'>Explorer</Breadcrumb>
        <Breadcrumb href='/blocks'>Blocks</Breadcrumb>
      </Breadcrumbs>
      <BlockView
        title='Block view'
        subtitle='1,057,456'
        block={block}
        transactions={latestTransactions}
      />
    </Container>
  );
};

export default BlockViewPage;
