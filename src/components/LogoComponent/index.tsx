import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';
import { featuredLogos } from '@/constants/featuresLogos';

import styles from './styled.module.scss';

export default function LogoComponent() {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <p>
        <h6>We are</h6>
        <h4>Featured in</h4>
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
    </div>
  );
}
