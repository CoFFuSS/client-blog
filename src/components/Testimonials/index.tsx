'use client';

import { useTranslations } from 'next-intl';

import Slider from '@/components/Slider';

import styles from './styles.module.scss';

export default function Testimonials() {
  const t = useTranslations('home.testimonials');

  return (
    <section className={styles.container}>
      <div className={styles.container__text}>
        <h5>{t('subtitle')}</h5>
        <h2>{t('title')}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.divider} />
      <Slider />
    </section>
  );
}
