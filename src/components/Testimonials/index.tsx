'use client';

import { useTranslations } from 'next-intl';

import Slider from '@/components/Slider';

import styles from './styles.module.scss';

export default function Testimonials() {
  const translation = useTranslations('home.testimonials');

  return (
    <section className={styles.container}>
      <div className={styles.container__text}>
        <h5>{translation('subtitle')}</h5>
        <h2>{translation('title')}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.divider} />
      <Slider />
    </section>
  );
}
