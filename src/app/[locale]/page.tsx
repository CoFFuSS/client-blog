import { unstable_setRequestLocale } from 'next-intl/server';
import { useMessages } from 'next-intl';

import { ParamsLocale } from '@/types/common';
import HomeComponent from '@/components/HomeComponent';

import styles from './page.module.scss';

export default function Home({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <main className={styles.main}>
      <HomeComponent
        locale={locale}
        messages={messages}
      />
    </main>
  );
}
