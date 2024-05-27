'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import RecommendedPost from '@/components/RecommendedPost';
import { otherPostsFilters } from '@/utils/otherPostsFilters';

import styles from './styles.module.scss';

interface OtherPostsProps {
  id: number;
}

export default function OtherPosts({ id }: OtherPostsProps) {
  const translation = useTranslations('posts');

  const [currentPostCategory, filteredPosts] = useMemo(() => otherPostsFilters(id), [id]);

  return (
    <section className={styles.section}>
      <h1>{translation('title')}</h1>
      <div className={styles.posts}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <RecommendedPost
              key={post.id}
              {...post}
            />
          ))
        ) : (
          <h3>
            {translation('noPosts')} {currentPostCategory?.toLocaleLowerCase()}
          </h3>
        )}
      </div>
    </section>
  );
}
