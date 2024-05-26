'use client';

import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

import { pickMessages } from '@/utils/pickMessages';
import { componentsToShow } from '@/constants/componentToShow';
import Hero from '@/components/Hero';
import { useInfiniteScrolling } from '@/hooks/useInfiniteScrolling';

import styles from './styles.module.scss';

interface HomeComponentProps {
  locale: string;
  messages: Record<string, string | AbstractIntlMessages>;
}

export default function HomeComponent({ locale, messages }: HomeComponentProps) {
  const [showItems, observerTarget] = useInfiniteScrolling();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pickMessages(messages, 'home')}
    >
      <Hero />
      <div className={styles.content}>
        {componentsToShow.slice(0, showItems).map(({ component: Component, id }) => (
          <Component key={id} />
        ))}
        <div ref={observerTarget} />
      </div>
    </NextIntlClientProvider>
  );
}
