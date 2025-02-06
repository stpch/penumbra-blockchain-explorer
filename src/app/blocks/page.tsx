import type { Metadata } from 'next';
import { FC } from 'react';
import { rootTitle } from '../../lib/constants';

export const metadata: Metadata = {
  title: `Blocks - ${rootTitle}`,
};

const BlocksPage: FC = async () => {
  return null;
};

export default BlocksPage;
