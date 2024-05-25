'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import cn from 'classnames';

import { blogPosts, postsPerPage } from '@/constants/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';

import styles from './styles.module.scss';

export default function BlogPosts() {
  const t = useTranslations('posts');
  const [currentPage, setCurrentPage] = useState(0);
  const [animation, setAnimation] = useState(styles.animate);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const start = currentPage * postsPerPage;
  const end = start + postsPerPage;
  const pagedPosts = blogPosts.slice(start, end);

  const handlePrevPage = () => {
    setCurrentPage((page) => page - 1);
    setAnimation(styles.animate__prev);
  };

  const handleNextPage = () => {
    setCurrentPage((page) => page + 1);
    setAnimation(styles.animate__next);
  };

  return (
    <section className={styles.posts}>
      <h1>{t('title')}</h1>
      <div
        className={cn(styles.posts__list, animation)}
        key={currentPage}
      >
        {pagedPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            {...post}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          type='button'
          disabled={currentPage === 0}
          onClick={handlePrevPage}
        >
          <h4>
            {'<'} {t('prev')}
          </h4>
        </button>
        <button
          className={styles.button}
          type='button'
          disabled={currentPage === totalPages - 1}
          onClick={handleNextPage}
        >
          <h4>
            {t('next')} {'>'}
          </h4>
        </button>
      </div>
    </section>
  );
}
