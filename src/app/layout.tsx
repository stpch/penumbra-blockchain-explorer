import '../lib/css/main.css';
import type { Metadata } from 'next';
import { Poppins, Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { FC, ReactNode } from 'react';
import background from '../../public/background.svg';
import { NavigationBar } from '../components/server';
import { rootTitle } from '../lib/constants';
import styles from './layout.module.css';

// @ts-expect-error: Font loaders must be called and assigned to a const in the module scope
const _fontPrimary = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: 'normal',
  display: 'swap',
});

// @ts-expect-error: Font loaders must be called and assigned to a const in the module scope
const _fontSecondary = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: 'normal',
  display: 'swap',
});

// @ts-expect-error: Font loaders must be called and assigned to a const in the module scope
const Iosevka = localFont({
  src: '../lib/fonts/iosevka-medium.woff2',
  declarations: [{ prop: 'fontFamily', value: 'Foo' }],
  weight: '500',
  style: 'normal',
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
      <body className={styles.body}>
        <div className={styles.background} style={{ backgroundImage: `url(${background.src})` }} />
        <NavigationBar />
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
