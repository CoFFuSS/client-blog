import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { ParamsLocale } from '@/types/common';
import { blogPosts } from '@/constants/blogPosts';
import FeaturedBlogPost from '@/components/FeaturedBlogPost';
import { pickMessages } from '@/utils/pickMessages';
import ChooseCategory from '@/components/ChooseCategory';
import Join from '@/components/Join';

export default function Blog({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  const { title, author, date, text, id } = blogPosts[0];

  return (
    <main>
      <NextIntlClientProvider messages={pickMessages(messages, 'home')}>
        <FeaturedBlogPost
          title={title}
          author={author}
          date={date}
          text={text}
          id={id}
        />
      </NextIntlClientProvider>
      <NextIntlClientProvider messages={pickMessages(messages, 'home')}>
        <ChooseCategory />
        <Join />
      </NextIntlClientProvider>
    </main>
  );
}
