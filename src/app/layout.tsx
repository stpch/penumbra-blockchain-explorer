import '../lib/css/main.css';
import type { Metadata } from 'next';
import { Poppins, Work_Sans } from 'next/font/google';
import { FC, ReactNode } from 'react';
import background from '../../public/background.svg';
import { NavigationBar } from '../components/server';
import { rootTitle } from '../lib/constants';
import styles from './layout.module.css';

// @ts-expect-error: Font loaders must be called and assigned to a const in the module scope
const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

// @ts-expect-error: Font loaders must be called and assigned to a const in the module scope
const _workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: rootTitle,
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
      <body style={{ backgroundImage: `url(${background.src})` }} className={styles.body}>
        <NavigationBar />
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
