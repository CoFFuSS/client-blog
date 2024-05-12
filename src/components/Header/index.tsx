'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';

import { navLinks } from '@/constants/navLinks';
import { Burger } from '@/components/Burger';
import NavigationLink from '@/components/NavigationLink';
import { routes } from '@/constants/routes';

import styles from './styled.module.scss';

import VideoModal from '../VideoModal';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('header');

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h4>
          <Link href={routes.home}>Modsen Client Blog</Link>
        </h4>
        <LanguageSwitcher />
      </div>
      <div>
        <div className={styles.menu}>
          <Burger
            isOpen={isOpen}
            toggleMenu={toggleMenu}
          />
          <ul className={cn(styles.header__links, isOpen ? styles.open : '')}>
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <NavigationLink href={href}>{t(`links.${name}`)}</NavigationLink>
              </li>
            ))}
            <VideoModal buttonContent={t('button')} />
          </ul>
        </div>
      </div>
    </header>
  );
}
