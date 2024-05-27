'use client';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { routes } from '@/constants/routes';
import Button from '@/components/Button';

import styles from './styles.module.scss';

interface FeaturedPostProps {
  author: string;
  content: string;
  title: string;
  date: string;
  buttonText: string;
  id: number;
  image: StaticImageData;
}

const FeaturedPost = memo(
  ({ author, content, title, date, buttonText, id, image }: FeaturedPostProps) => {
    const router = useRouter();

    const handleRedirect = () => router.push(`${routes.blog}/${id}`);

    return (
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={image}
          alt='feature-post'
        />
        <div className={styles.text}>
          <h6>
            By <span>{author}</span> | {date}
          </h6>
          <h2>{title}</h2>
          <h5>{content}</h5>
        </div>

        <Button
          dataCy='feature-post-button'
          variant='primary'
          onClick={handleRedirect}
        >
          {buttonText} <span>{'>'}</span>
        </Button>
      </div>
    );
  },
);

export default FeaturedPost;
