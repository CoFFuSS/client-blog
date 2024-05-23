'use client';

import { useTranslations } from 'next-intl';

import { BlogPostFields, blogPosts } from '@/constants/blogPosts';

import BlogPostCard from '../BlogPostCard';

export default function BlogPosts() {
  const t = useTranslations('blogPosts');

  return (
    <section>
      <section>
        <h1>{t('posts.title')}</h1>
        <div>
          {blogPosts.slice(0, 6).map((post: BlogPostFields) => (
            <BlogPostCard
              key={post.id}
              {...post}
            />
          ))}
        </div>
        <div>
          <button type='button'>
            {'<'} {t('prev')}
          </button>
          <button type='button'>
            {'>'} {t('next')}
          </button>
        </div>
      </section>
    </section>
  );
}
