import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

interface CategoryCardProps {
  icon: string;
  label: string;
  text: string;
}

export default function CategoryCard({ icon, label, text }: CategoryCardProps) {
  return (
    <div className={styles.container}>
      <Link href={`${routes.category}/${label}`}>
        <Image
          src={icon}
          alt='title'
        />
        <h2>{label}</h2>
        <p>{text}</p>
      </Link>
    </div>
  );
}
