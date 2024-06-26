import { useTranslations, useMessages, NextIntlClientProvider } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { blogPosts } from '@/constants/blogPosts';
import { routes } from '@/constants/routes';
import { authors } from '@/constants/authors';
import Join from '@/components/Join';
import { pickMessages } from '@/utils/pickMessages';
import OtherPosts from '@/components/OtherPosts';

import styles from './page.module.scss';

interface PostProps {
  params: { id: string };
}

export default function Post({ params: { id } }: PostProps) {
  const translation = useTranslations('posts');
  const messages = useMessages();

  const currentPost = useMemo(() => blogPosts.find((post) => post.id === +id), [id]);

  const profileImage = useMemo(
    () => authors.find((currAuthor) => currAuthor.name === currentPost?.author)?.avatar,
    [currentPost?.author],
  );

  if (!currentPost) {
    return (
      <div className={styles.wrapper}>
        <h1>{translation('noPosts')}</h1>
        <Link
          className={styles.link}
          href={routes.blog}
        >
          {'<'} {translation('back')}
        </Link>
      </div>
    );
  }

  const {
    author,
    category,
    content: { points, text: contentText, title: contentTitle },
    date,
    icon,
    image,
    title,
  } = currentPost;

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.content__author}>
            {profileImage && (
              <Image
                src={profileImage}
                alt={author}
              />
            )}
            <div>
              <h3>{author}</h3>
              <p>{date}</p>
            </div>
          </div>
          <h1>{title}</h1>
          <div className={styles.content__category}>
            <Image
              src={icon}
              alt='post-icon'
            />
            <span>{category}</span>
          </div>
        </div>
        <div className={styles.image__container}>
          <Image
            className={styles.image}
            src={image}
            alt={title}
          />
        </div>
        <div className={styles.content}>
          <h2>{contentTitle}</h2>
          <ul className={styles.content__list}>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p>{contentText}</p>
        </div>
      </section>
      <NextIntlClientProvider messages={pickMessages(messages, 'posts')}>
        <OtherPosts id={Number(id)} />
      </NextIntlClientProvider>
      <NextIntlClientProvider messages={pickMessages(messages, 'posts')}>
        <Join />
      </NextIntlClientProvider>
    </main>
  );
}
