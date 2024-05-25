import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { BlogPostFields } from '@/constants/blogPosts';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

interface SearchProps {
  placeholder: string;
  buttonText: string;
  posts: BlogPostFields[];
}

export default function Search({ placeholder, buttonText, posts }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPostFields[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    if (e.target.value) {
      const lowerCaseQuery = e.target.value.toLowerCase();
      const newFilteredPosts = posts.filter(({ tags }) =>
        tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)),
      );

      setFilteredPosts(newFilteredPosts);
      setIsVisible(true);
    } else {
      setFilteredPosts([]);
      setIsVisible(false);
    }
  };

  return (
    <div className={styles.search}>
      <Input
        variant='primary'
        dataCy='search-category-input'
        type='value'
        name='search-category'
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearch}
      />
      <Button variant='primary'>{buttonText}</Button>
      <div className={cn(styles.dropdown, isVisible ? styles.visible : '')}>
        {filteredPosts.map(({ id, image, title, tags }) => (
          <div
            key={id}
            className={styles.dropdown__item}
          >
            <Image
              width={48}
              height={48}
              src={image}
              alt={title}
            />
            <Link href={`${routes.blog}/${id}`}>
              <h6 className={styles.dropdown__title}>{title}</h6>
            </Link>
            <div className={styles.dropdown__tags}>{tags.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
