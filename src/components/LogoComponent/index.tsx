import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';
import { featuredLogos } from '@/constants/featuresLogos';

import styles from './styles.module.scss';

export default function LogoComponent() {
  const t = useTranslations('home.logo');
  const locale = useLocale();

  return (
    <section className={styles.container}>
      <p>
        <h6>{t('subtitle')}</h6>
        <h4>{t('title')}</h4>
      </p>

      {featuredLogos.map(({ logo, alt }) => (
        <Link
          href={routes.home + locale}
          key={alt}
        >
          <Image
            src={logo}
            alt={alt}
          />
        </Link>
      ))}
    </section>
  );
}
