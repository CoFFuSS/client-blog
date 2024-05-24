'use client';

import { useTranslations } from 'next-intl';

import { blogPosts } from '@/constants/blogPosts';

interface OtherPostsProps {
  id: number;
}

export default function OtherPosts({ id }: OtherPostsProps) {
  const t = useTranslations('posts');
  const currentPostCategory = blogPosts.find(({ id: currId }) => currId === +id)?.category;

  return (
    <section>
      <h1>{t('title')}</h1>

      <p>{currentPostCategory}</p>
    </section>
  );
}
