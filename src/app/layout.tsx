import '../lib/css/main.css';
import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Penumbra Blockchain Explorer',
  description: 'PK Labs frontend developer onboarding task.',
  icons: [
    {
      url: '/favicon.ico',
      rel: 'icon',
      sizes: '32x32',
    },
  ],
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = async props => {
  return (
    <html lang='en'>
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
