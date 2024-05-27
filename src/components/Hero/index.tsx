import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { routes } from '@/constants/routes';
import Button from '@/components/Button';

import styles from './styles.module.scss';

export default function Hero() {
  const translation = useTranslations('home.hero');

  return (
    <div className={styles.container}>
      <h6>{translation('posted')}</h6>
      <h1 className={styles.title}>{translation('title')}</h1>
      <h6>
        {translation('by')} <span className={styles.name}>James West</span> | {translation('date')}
      </h6>
      <h6 className={styles.text}>{translation('text')}</h6>
      <Button
        dataCy='learn-more-button'
        variant='primary'
      >
        <Link href={routes.blog}>{translation('readMoreBtn')} </Link>
        <span>{'>'}</span>
      </Button>
    </div>
  );
}
