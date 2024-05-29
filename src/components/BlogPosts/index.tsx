'use client';

import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import cn from 'classnames';

import BlogPostCard from '@/components/BlogPostCard';
import { blogPostMath } from '@/utils/blogPostsMath';

import styles from './styles.module.scss';

export default function BlogPosts() {
  const translation = useTranslations('posts');
  const [currentPage, setCurrentPage] = useState(0);
  const [animation, setAnimation] = useState(styles.animate);
  const [totalPages, pagedPosts] = useMemo(() => blogPostMath(currentPage), [currentPage]);

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
      <h1>{translation('title')}</h1>
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
            {'<'} {translation('prev')}
          </h4>
        </button>
        <button
          className={styles.button}
          type='button'
          disabled={currentPage === totalPages - 1}
          onClick={handleNextPage}
        >
          <h4>
            {translation('next')} {'>'}
          </h4>
        </button>
      </div>
    </section>
  );
}
