import { blogPosts, postsPerPage } from '@/constants/blogPosts';

export const blogPostMath = (currentPage: number) => {
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const start = currentPage * postsPerPage;
  const end = start + postsPerPage;
  const pagedPosts = blogPosts.slice(start, end);

  return [totalPages, pagedPosts] as const;
};
