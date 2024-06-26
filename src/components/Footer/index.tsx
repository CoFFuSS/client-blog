import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { footerRoutes } from '@/constants/footerRoutes';
import NavigationLink from '@/components/NavigationLink';
import { routes } from '@/constants/routes';
import FooterForm from '@/components/FooterForm';
import SocialWrapper from '@/components/SocialWrapper';

import styles from './styles.module.scss';

export default function Footer() {
  const translation = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.top}>
          <h4>
            <Link href={routes.home}>Modsen Client Blog</Link>
          </h4>
          <ul className={styles.links}>
            {footerRoutes.map(({ name, href }) => (
              <li key={name}>
                <NavigationLink href={href}>{translation(`links.${name}`)}</NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.content}>
          <FooterForm />
        </div>
        <div className={styles.bottom}>
          <div className={styles.contacts}>
            <span>Finstreet 118 2561 Fintown</span>
            <span>Hello@finsweet.com 020 7993 2905</span>
          </div>
          <SocialWrapper />
        </div>
      </div>
    </footer>
  );
}
