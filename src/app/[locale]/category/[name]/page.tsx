import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMemo } from 'react';

import { blogPosts } from '@/constants/blogPosts';
import { routes } from '@/constants/routes';
import { pickMessages } from '@/utils/pickMessages';
import CategorySection from '@/components/CategorySection';

import styles from './styles.module.scss';

interface CategoryProps {
  params: { name: string };
}

export default function Category({ params: { name } }: CategoryProps) {
  const translation = useTranslations('category');
  const messages = useMessages();

  const filteredByCategory = useMemo(
    () => blogPosts.filter(({ category }) => category.toLowerCase() === name),
    [name],
  );

  return (
    <main>
      <header className={styles.header}>
        <h1>{translation(`${name.toLowerCase()}.title`)}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </p>
        <span>
          <Link
            className={styles.category__link}
            href={routes.blog}
          >
            {translation('breadcrumbs.blog')}
          </Link>{' '}
          {'>'} {translation(`${name.toLowerCase()}.title`)}
        </span>
      </header>
      <NextIntlClientProvider messages={pickMessages(messages, 'category')}>
        <CategorySection
          posts={filteredByCategory}
          name={name}
        />
      </NextIntlClientProvider>
    </main>
  );
}
