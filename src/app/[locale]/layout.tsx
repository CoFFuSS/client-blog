import '@/styles/globals.scss';

import { Sen } from 'next/font/google';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pickMessages } from '@/utils/pickMessages';
import { locales } from '@/config';

const sen = Sen({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'Client Blog Application with next.js',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={sen.className}>
        <NextIntlClientProvider messages={pickMessages(messages, 'header')}>
          <Header />
        </NextIntlClientProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
