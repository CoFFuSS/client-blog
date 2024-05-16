import { useTranslations } from 'next-intl';

import { postsToShow } from '@/constants/postsToShow';
import { blogPosts } from '@/constants/blogPosts';

import styles from './styled.module.scss';

import FeaturedPost from '../FeaturedPost';
import PostCard from '../PostCard';

export default function Posts() {
  const t = useTranslations('home.posts');
  const {
    author: featuredAuthor,
    image,
    date: featureDate,
    id: featuredId,
    title,
    text,
  } = blogPosts[0];

  return (
    <section className={styles.container}>
      <div className={styles.feature}>
        <h1>Feature Post</h1>
        <FeaturedPost
          author={featuredAuthor}
          image={image}
          date={featureDate}
          id={featuredId}
          title={title}
          content={text}
          buttonText={t('featured.post.readMoreBtn')}
        />
      </div>
      <div className={styles.posts}>
        <h1>All Posts</h1>
        <div>
          {postsToShow.map(({ date, author, content, id }) => (
            <PostCard
              key={id}
              id={id}
              author={author}
              date={date}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}