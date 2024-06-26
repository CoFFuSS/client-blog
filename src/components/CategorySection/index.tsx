'use client';

import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';

import { BlogPostFields } from '@/constants/blogPosts';
import { categoryCards } from '@/constants/categoryCard';
import Categories from '@/components/Categories';
import Tags from '@/components/Tags';
import Search from '@/components/Search';
import BlogPostCard from '@/components/BlogPostCard';

import styles from './styles.module.scss';

interface CategorySectionProps {
  posts: BlogPostFields[];
  name: string;
}

export default function CategorySection({ posts: currentPosts, name }: CategorySectionProps) {
  const translation = useTranslations('category');
  const [posts, setPosts] = useState<BlogPostFields[]>(currentPosts);
  const categories = useMemo(
    () => categoryCards.map(({ label }) => translation(`${label}.title`)),
    [translation],
  );

  return (
    <section className={styles.section}>
      <div className={styles.section__posts}>
        {posts.length > 0 ? (
          posts.map(({ title, tags, image, category, text, date, author, icon, id, content }) => (
            <BlogPostCard
              key={id}
              image={image}
              category={category}
              title={title}
              text={text}
              date={date}
              author={author}
              content={content}
              tags={tags}
              icon={icon}
              id={id}
            />
          ))
        ) : (
          <h2>{translation('noPosts')}</h2>
        )}
      </div>
      <div className={styles.section__sidebar}>
        <Search
          placeholder={translation('placeholder')}
          buttonText={translation('buttonText')}
          posts={posts}
        />
        <h2>{translation('categoriesTitle')}</h2>
        <Categories
          categories={categories}
          name={name}
        />
        <h2>{translation('tagsTitle')}</h2>
        <Tags
          posts={posts}
          setPosts={setPosts}
        />
      </div>
    </section>
  );
}
