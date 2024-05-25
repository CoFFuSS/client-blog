'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

import { categoryCards } from '@/constants/categoryCard';
import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

interface CategoriesProps {
  categories: string[];
  name: string;
}

export default function Categories({ categories, name }: CategoriesProps) {
  const router = useRouter();
  const handleRedirectToCategory = (label: string) => () =>
    router.push(`${routes.category}/${label}`);

  const handleKeyDown = (label: string) => (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleRedirectToCategory(label)();
    }
  };

  return (
    <div className={styles.category}>
      {categoryCards.map(({ icon, label }, index) => (
        <div
          className={cn(styles.category__card, name === label ? styles.active : '')}
          key={label}
          onClick={handleRedirectToCategory(label)}
          onKeyDown={handleKeyDown(label)}
          role='button'
          tabIndex={0}
        >
          <Image
            width={48}
            height={48}
            src={icon}
            alt={label}
          />
          <p>{categories[index]}</p>
        </div>
      ))}
    </div>
  );
}
