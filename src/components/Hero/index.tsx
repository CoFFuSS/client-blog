import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { routes } from '@/constants/routes';
import Button from '@/components/Button';

import styles from './styles.module.scss';

export default function Hero() {
  const t = useTranslations('home.hero');

  return (
    <div className={styles.container}>
      <h6>{t('posted')}</h6>
      <h1 className={styles.title}>{t('title')}</h1>
      <h6>
        {t('by')} <span className={styles.name}>James West</span> | {t('date')}
      </h6>
      <h6 className={styles.text}>{t('text')}</h6>
      <Button
        dataCy='learn-more-button'
        variant='primary'
      >
        <Link href={routes.blog}>{t('readMoreBtn')} </Link>
        <span>{'>'}</span>
      </Button>
    </div>
  );
}
