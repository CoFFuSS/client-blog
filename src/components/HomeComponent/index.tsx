import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

import { pickMessages } from '@/utils/pickMessages';

import Hero from '../Hero';

interface HomeComponentProps {
  locale: string;
  messages: Record<string, string | AbstractIntlMessages>;
}

export default function HomeComponent({ locale, messages }: HomeComponentProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pickMessages(messages, 'home')}
    >
      <Hero />
      <div>
        <h3>ABIBUS</h3>
      </div>
    </NextIntlClientProvider>
  );
}
