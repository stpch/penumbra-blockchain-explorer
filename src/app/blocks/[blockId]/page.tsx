import type { Metadata } from 'next';
import { FC } from 'react';
import { rootTitle } from '../../../lib/constants';

interface Props {
  params: Promise<{
    blockId: string;
  }>;
}

export const generateStaticParams = () => {
  return [{ blockId: '123456789' }];
};

export const generateMetadata = async (props: Props): Promise<Metadata> => ({
  title: `Block ${(await props.params).blockId} - ${rootTitle}`,
});

const BlockDetailsPage: FC<Props> = async () => {
  return null;
};

export default BlockDetailsPage;
