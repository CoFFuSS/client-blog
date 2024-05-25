'use client';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import cn from 'classnames';

import { BlogPostFields } from '@/constants/blogPosts';
import { tagsList } from '@/constants/tags';

import styles from './styles.module.scss';

interface TagsProps {
  posts: BlogPostFields[];
  setPosts: Dispatch<SetStateAction<BlogPostFields[]>>;
}

export default function Tags({ posts, setPosts }: TagsProps) {
  const t = useTranslations('category');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const initialPosts = useRef<BlogPostFields[]>(posts);

  useEffect(() => {
    if (selectedTags.length > 0) {
      const filteredPosts = initialPosts.current.filter(({ tags: currTags }) =>
        selectedTags.every((tag) => currTags.includes(tag)),
      );

      setPosts(filteredPosts);
    }
  }, [selectedTags, setPosts]);

  const hadnleSelectTag = (tag: string) => () => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag.toLowerCase())) {
        return prevTags.filter((prevTag) => prevTag !== tag.toLowerCase());
      }

      return [...prevTags, tag.toLowerCase()];
    });
  };

  const handleClearTags = () => {
    setSelectedTags([]);
    setPosts(initialPosts.current);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tagsList.map((tag) => (
          <button
            className={cn(
              styles.button,
              selectedTags.includes(tag.toLowerCase()) ? styles.active : '',
            )}
            key={tag}
            type='button'
            onClick={hadnleSelectTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <button
        className={cn(styles.button, styles.clear)}
        type='button'
        onClick={handleClearTags}
      >
        {t('buttonClear')}
      </button>
    </div>
  );
}
