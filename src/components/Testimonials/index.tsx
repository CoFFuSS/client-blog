'use client';

import styles from './styled.module.scss';

import Slider from '../Slider';

export default function Testimonials() {
  return (
    <section className={styles.container}>
      <div>
        <h5>TESTIMONIALs</h5>
        <h2>What people say about our blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.divider} />
      <Slider />
    </section>
  );
}
