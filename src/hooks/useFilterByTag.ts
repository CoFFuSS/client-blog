import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { BlogPostFields } from '@/constants/blogPosts';

export const useFilterByTag = (
  posts: BlogPostFields[],
  setPosts: Dispatch<SetStateAction<BlogPostFields[]>>,
) => {
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

  return [setSelectedTags, selectedTags, initialPosts] as const;
};
