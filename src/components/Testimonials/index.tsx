'use client';

import { useTranslations } from 'next-intl';

import styles from './styled.module.scss';

import Slider from '../Slider';

export default function Testimonials() {
  const t = useTranslations('home.testimonials');

  return (
    <section className={styles.container}>
      <div>
        <h5>{t('subtitle')}</h5>
        <h2>{t('title')}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.divider} />
      <Slider />
    </section>
  );
}