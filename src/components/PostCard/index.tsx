import Link from 'next/link';

import { routes } from '@/constants/routes';

import styles from './styled.module.scss';

interface PostCardProps {
  author: string;
  date: string;
  content: string;
  id: number;
}

export default function PostCard({ author, date, content, id }: PostCardProps) {
  return (
    <div className={styles.container}>
      <h5>
        By <span className={styles.name}>{author}</span> | {date}
      </h5>
      <Link href={`${routes.blog}/${id}`}>
        <h4>{content}</h4>
      </Link>
    </div>
  );
}
