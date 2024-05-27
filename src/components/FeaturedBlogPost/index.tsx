'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { memo } from 'react';

import { routes } from '@/constants/routes';
import blogHeader from '@/assets/images/blogHeader.png';
import Button from '@/components/Button';

import styles from './styles.module.scss';

interface FeaturedBlogPostProps {
  title: string;
  author: string;
  date: string;
  text: string;
  id: number;
}

const FeaturedBlogPost = memo(({ title, author, date, text, id }: FeaturedBlogPostProps) => {
  const translation = useTranslations('home.hero');
  const router = useRouter();

  const handleRedirectPost = () => router.push(`${routes.blog}/${id}`);

  return (
    <section className={styles.post}>
      <div className={styles.post__info}>
        <h5>{translation('subtitle')}</h5>
        <h2 className={styles.post__title}>{title}</h2>
        <h6>
          {translation('by')} <span className={styles.post__name}>{author}</span> | {date}
        </h6>
        <p className={styles.post__text}>{text}</p>
        <Button
          variant='primary'
          onClick={handleRedirectPost}
        >
          <h4>
            {translation('readMoreBtn')} <span>{'>'}</span>
          </h4>
        </Button>
      </div>
      <div>
        <Image
          className={styles.image}
          src={blogHeader}
          alt='blog-header'
        />
      </div>
    </section>
  );
});

export default FeaturedBlogPost;
