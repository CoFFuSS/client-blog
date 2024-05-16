'use client';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import { routes } from '@/constants/routes';

import styles from './styled.module.scss';

import Button from '../Button';

interface FeaturedPostProps {
  author: string;
  content: string;
  title: string;
  date: string;
  buttonText: string;
  id: number;
  image: StaticImageData;
}

export default function FeaturedPost({
  author,
  content,
  title,
  date,
  buttonText,
  id,
  image,
}: FeaturedPostProps) {
  const router = useRouter();

  const redirectOnClick = () => router.push(`${routes.blog}/${id}`);

  return (
    <div>
      <Image
        className={styles.image}
        src={image}
        alt='feature-post'
      />
      <h6>
        By <span>{author}</span> | {date}
      </h6>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <Button
        dataCy='feature-post-button'
        variant='primary'
        onClick={redirectOnClick}
      >
        {buttonText} <span>{'>'}</span>
      </Button>
    </div>
  );
}
