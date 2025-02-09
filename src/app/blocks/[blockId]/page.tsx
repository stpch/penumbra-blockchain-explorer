import type { Metadata } from 'next';
import { FC } from 'react';
import { Breadcrumb, Breadcrumbs, Container } from '../../../components';
import { rootTitle } from '../../../lib/constants';

interface Props {
  params: Promise<{
    blockId: string;
  }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => ({
  title: `Block ${(await props.params).blockId} - ${rootTitle}`,
});

const BlockDetailsPage: FC<Props> = async () => (
  <Container>
    <Breadcrumbs>
      <Breadcrumb href='/'>Explorer</Breadcrumb>
      <Breadcrumb href='/blocks'>Blocks</Breadcrumb>
    </Breadcrumbs>
  </Container>
);

export default BlockDetailsPage;
