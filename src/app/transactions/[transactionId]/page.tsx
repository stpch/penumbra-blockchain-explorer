import type { Metadata } from 'next';
import { FC } from 'react';
import { rootTitle } from '../../../lib/constants';

interface Props {
  params: Promise<{
    transactionId: string;
  }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => ({
  title: `Transaction ${(await props.params).transactionId} - ${rootTitle}`,
});

const TransactionDetailsPage: FC = async () => {
  return null;
};

export default TransactionDetailsPage;
