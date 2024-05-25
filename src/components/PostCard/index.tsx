import Link from 'next/link';
import { memo } from 'react';

import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

interface PostCardProps {
  author: string;
  date: string;
  content: string;
  id: number;
}

const PostCard = memo(({ author, date, content, id }: PostCardProps) => (
  <div className={styles.container}>
    <h5>
      By <span className={styles.name}>{author}</span> | {date}
    </h5>
    <Link href={`${routes.blog}/${id}`}>
      <h4>{content}</h4>
    </Link>
  </div>
));

export default PostCard;
