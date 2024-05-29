import { useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import SocialWrapper from '@/components/SocialWrapper';
import { authors } from '@/constants/authors';
import { BlogPostFields, blogPosts } from '@/constants/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';

import styles from './page.module.scss';

interface AuthorProps {
  params: { id: string };
}

export default function Authors({ params: { id } }: AuthorProps) {
  const translation = useTranslations('author');

  const currentAuthor = useMemo(() => authors.find(({ id: currentId }) => currentId === +id), [id]);

  const authorPosts: BlogPostFields[] = useMemo(() => {
    if (currentAuthor) {
      return blogPosts.filter(({ author }) => author === currentAuthor.name);
    }

    return [];
  }, [currentAuthor]);

  if (!currentAuthor) {
    return (
      <h1>
        {translation('noAuthor')} {id}
      </h1>
    );
  }

  if (authorPosts.length === 0) {
    return <h1>{translation('noAuthorPosts')}</h1>;
  }

  const { avatar, name } = currentAuthor;

  return (
    <main className={styles.container}>
      <div className={styles.profile}>
        <Image
          src={avatar}
          alt={name}
        />
        <div className={styles.profile__upper}>
          <h1>{translation('title')}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
          <SocialWrapper />
        </div>
      </div>
      <div className={styles.posts}>
        <h1>{translation('postTitle')}</h1>
        <div className={styles.posts__list}>
          {authorPosts.map((post: BlogPostFields) => (
            <BlogPostCard
              key={post.id}
              {...post}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
