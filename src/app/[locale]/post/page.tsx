import { unstable_setRequestLocale } from 'next-intl/server';

import { ParamsLocale } from '@/types/common';

export default function Blog({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <h4>Blog</h4>
    </main>
  );
}
