import { useTranslations } from 'next-intl';
import Link from 'next/link';

import Button from '@/components/Button';
import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

export default function Join() {
  const translation = useTranslations('home.join');

  return (
    <section className={styles.container}>
      <h1>{translation('title')}</h1>
      <p>{translation('text')}</p>
      <Button
        variant='primary'
        dataCy='join-now-button'
      >
        <Link href={routes.contact}>{translation('button')}</Link>
      </Button>
    </section>
  );
}
