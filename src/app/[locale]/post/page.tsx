import { NextIntlClientProvider, useMessages } from 'next-intl';

import { blogPosts } from '@/constants/blogPosts';
import FeaturedBlogPost from '@/components/FeaturedBlogPost';
import { pickMessages } from '@/utils/pickMessages';
import ChooseCategory from '@/components/ChooseCategory';
import Join from '@/components/Join';
import BlogPosts from '@/components/BlogPosts';

import styles from './page.module.scss';

export default function Blog() {
  const messages = useMessages();

  const { title, author, date, text, id } = blogPosts[0];

  return (
    <main className={styles.container}>
      <NextIntlClientProvider messages={pickMessages(messages, 'home')}>
        <FeaturedBlogPost
          title={title}
          author={author}
          date={date}
          text={text}
          id={id}
        />
      </NextIntlClientProvider>
      <NextIntlClientProvider messages={pickMessages(messages, 'posts')}>
        <BlogPosts />
      </NextIntlClientProvider>
      <NextIntlClientProvider messages={pickMessages(messages, 'home')}>
        <ChooseCategory />
        <Join />
      </NextIntlClientProvider>
    </main>
  );
}
