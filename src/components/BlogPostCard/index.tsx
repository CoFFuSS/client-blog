import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';
import { BlogPostFields } from '@/constants/blogPosts';

import styles from './styles.module.scss';

export default function BlogPostCard({ image, category, title, text, id }: BlogPostFields) {
  return (
    <section className={styles.card}>
      <div>
        <Image
          className={styles.card__image}
          src={image}
          alt={title}
        />
      </div>
      <div className={styles.card__info}>
        <h5 className={styles.card__category}>{category}</h5>
        <Link href={`${routes.blog}/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{text}</p>
      </div>
    </section>
  );
}
