import Link from 'next/link';

import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.columns}>
          <h5>ABOUT US</h5>
          <h1>We are a community of content writers who share their learnings</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            href={routes.about}
            className={styles.link}
          >
            Read More <span>{'>'}</span>
          </Link>
        </div>
        <div className={styles.columns}>
          <h5>Our mision</h5>
          <h2>Creating valuable content for creatives all around the world</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
