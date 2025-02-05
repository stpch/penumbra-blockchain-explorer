import type { Metadata } from "next";
import "../lib/css/main.css";
import { ReactNode, FC } from "react";

export const metadata: Metadata = {
  title: "Penumbra Blockchain Explorer",
  description: "PK Labs frontend developer onboarding task.",
  icons: [
    {
        url: '/favicon.ico',
        rel: 'icon',
        sizes: '32x32',
    },
  ],
};

interface Props {
  children: ReactNode
  params: { locale: string }
}

const RootLayout: FC<Props> = async props => {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}

export default RootLayout;
