import type { Metadata } from 'next';
import { FC } from 'react';
import { rootTitle } from '../../lib/constants';

export const metadata: Metadata = {
  title: `Transactions - ${rootTitle}`,
};

const TransactionsPage: FC = async () => {
  return null;
};

export default TransactionsPage;
