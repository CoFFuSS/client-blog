import { unstable_setRequestLocale } from 'next-intl/server';

import { ParamsLocale } from '@/types/common';

import styles from './page.module.scss';

export default function Home({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);

  return (
    <main className={styles.main}>
      <div>
        <h2>ABOBA</h2>
      </div>
    </main>
  );
}
