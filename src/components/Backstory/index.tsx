import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import background from '@/assets/images/backstory-background.png';
import { routes } from '@/constants/routes';
import Button from '@/components/Button';

import styles from './styles.module.scss';

export default function Backstory() {
  const translation = useTranslations('home.backstory');

  return (
    <section className={styles.container}>
      <Image
        className={styles.image}
        src={background}
        alt='backstory-background'
      />
      <div className={styles.content}>
        <h5 className={styles.subtitle}>{translation('subtitle')}</h5>
        <h1 className={styles.title}>{translation('title')}</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip.
        </p>
        <Button
          variant='primary'
          dataCy='about-us-button'
        >
          <h5>
            <Link href={routes.about}>
              {translation('button')} <span>{'>'}</span>
            </Link>
          </h5>
        </Button>
      </div>
    </section>
  );
}
