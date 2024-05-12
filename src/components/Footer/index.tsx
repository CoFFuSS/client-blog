import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { footerRoutes } from '@/constants/footerRoutes';
import NavigationLink from '@/components/NavigationLink';
import { routes } from '@/constants/routes';
import FooterForm from '@/components/FooterForm';

import styles from './styled.module.scss';

export default function Footer() {
  const t = useTranslations('footer');

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
                <NavigationLink href={href}>{t(`links.${name}`)}</NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.content}>
          <FooterForm />
        </div>
        <div>
          <div className={styles.contacts}>
            <span>Finstreet 118 2561 Fintown</span>
            <span>Hello@finsweet.com 020 7993 2905</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
