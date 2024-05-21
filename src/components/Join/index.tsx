import { useTranslations } from 'next-intl';
import Link from 'next/link';

import Button from '@/components/Button';
import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

export default function Join() {
  const t = useTranslations('home.join');

  return (
    <section className={styles.container}>
      <h1>{t('title')}</h1>
      <p>{t('text')}</p>
      <Button
        variant='primary'
        dataCy='join-now-button'
      >
        <Link href={routes.contact}>{t('button')}</Link>
      </Button>
    </section>
  );
}
