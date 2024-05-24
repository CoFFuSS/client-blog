import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

interface RecommendedPostProps {
  author: string;
  date: string;
  title: string;
  text: string;
  image: StaticImageData;
  id: number;
}

export default function RecommendedPost({
  author,
  date,
  title,
  text,
  image,
  id,
}: RecommendedPostProps) {
  return (
    <article className={styles.post}>
      <Image
        className={styles.post__image}
        src={image}
        alt={title}
      />
      <p>
        By <span>{author}</span> | {date}
      </p>
      <Link href={`${routes.blog}/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{text}</p>
    </article>
  );
}
