import { unstable_setRequestLocale } from 'next-intl/server';

import { ParamsLocale } from '@/types/common';

export default function Privacy({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <h4>Privacy</h4>
    </main>
  );
}
