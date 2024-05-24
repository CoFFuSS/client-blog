'use client';

import { useTranslations } from 'next-intl';

import { blogPosts } from '@/constants/blogPosts';
import RecommendedPost from '@/components/RecommendedPost';

import styles from './styles.module.scss';

interface OtherPostsProps {
  id: number;
}

export default function OtherPosts({ id }: OtherPostsProps) {
  const t = useTranslations('posts');
  const currentPostCategory = blogPosts.find(({ id: currId }) => currId === +id)?.category;
  const filteredPosts = blogPosts
    .filter(({ id: currId, category }) => currId !== id && category === currentPostCategory)
    .slice(0, 3);

  return (
    <section className={styles.section}>
      <h1>{t('title')}</h1>
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
            {t('noPosts')} {currentPostCategory?.toLocaleLowerCase()}
          </h3>
        )}
      </div>
    </section>
  );
}
