import { unstable_setRequestLocale } from 'next-intl/server';

import { ParamsLocale } from '@/types/common';

export default function AboutPage({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <h2>ABOBA</h2>
    </main>
  );
}
