import { unstable_setRequestLocale } from 'next-intl/server';

import { ParamsLocale } from '@/types/common';

export default function Contact({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <h4>Contact</h4>
    </main>
  );
}
