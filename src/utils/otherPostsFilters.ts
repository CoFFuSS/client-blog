import { blogPosts } from '@/constants/blogPosts';

export const otherPostsFilters = (id: number) => {
  const currentPostCategory = blogPosts.find(({ id: currId }) => currId === +id)?.category;
  const filteredPosts = blogPosts
    .filter(({ id: currId, category }) => currId !== id && category === currentPostCategory)
    .slice(0, 3);

  return [currentPostCategory, filteredPosts] as const;
};
