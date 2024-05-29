'use client';

import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

import { BlogPostFields } from '@/constants/blogPosts';
import { tagsList } from '@/constants/tags';
import { useFilterByTag } from '@/hooks/useFilterByTag';

import styles from './styles.module.scss';

interface TagsProps {
  posts: BlogPostFields[];
  setPosts: Dispatch<SetStateAction<BlogPostFields[]>>;
}

export default function Tags({ posts, setPosts }: TagsProps) {
  const [setSelectedTags, selectedTags, initialPosts] = useFilterByTag(posts, setPosts);

  const handleSelectTag = (tag: string) => () => {
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
            onClick={handleSelectTag(tag)}
            data-cy={tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <button
        data-cy='clear-tags-button'
        className={cn(styles.button, styles.clear)}
        type='button'
        onClick={handleClearTags}
      >
        Clear tags
      </button>
    </div>
  );
}
