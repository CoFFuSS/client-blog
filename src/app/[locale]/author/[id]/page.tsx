import Image from 'next/image';
import { useTranslations } from 'next-intl';

import SocialWrapper from '@/components/SocialWrapper';
import { authors } from '@/constants/authors';
import { BlogPostFields, blogPosts } from '@/constants/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';

import styles from './styles.module.scss';

interface AuthorProps {
  params: { id: string };
}

export default function Authors({ params: { id } }: AuthorProps) {
  const t = useTranslations('author');
  const currentAuthor = authors.find(({ id: currentId }) => currentId === +id);

  if (!currentAuthor) {
    return (
      <h1>
        {t('noAuthor')} {id}
      </h1>
    );
  }

  const { avatar, name } = currentAuthor;
  const authorPosts: BlogPostFields[] = blogPosts.filter(({ author }) => author === name);

  if (authorPosts && authorPosts.length === 0) {
    return <h1>{t('noAuthorPosts')}</h1>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.profile}>
        <div>
          <Image
            src={avatar}
            alt={name}
          />
        </div>
        <div className={styles.profile__upper}>
          <h1>{t('title', { name })}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
          <SocialWrapper />
        </div>
      </div>
      <div className={styles.posts}>
        <h1>{t('postTitle')}</h1>
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
