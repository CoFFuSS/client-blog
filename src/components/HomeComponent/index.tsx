'use client';

import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { Fragment, useEffect, useRef, useState } from 'react';

import { pickMessages } from '@/utils/pickMessages';
import { componentsToShow } from '@/constants/componentToShow';

import styles from './styled.module.scss';

import Hero from '../Hero';

interface HomeComponentProps {
  locale: string;
  messages: Record<string, string | AbstractIntlMessages>;
}

export default function HomeComponent({ locale, messages }: HomeComponentProps) {
  const [showItems, setShowItems] = useState(1);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowItems((prev) => prev + 1);
        }
      },
      { threshold: 1 },
    );

    const target = observerTarget.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pickMessages(messages, 'home')}
    >
      <Hero />
      <div className={styles.content}>
        {componentsToShow.slice(0, showItems).map(({ component: Component, id }) => (
          <Fragment key={id}>
            <Component />
          </Fragment>
        ))}
        <div ref={observerTarget} />
      </div>
    </NextIntlClientProvider>
  );
}
