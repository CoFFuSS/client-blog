'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';

import { navLinks } from '@/constants/navLinks';
import { Burger } from '@/components/Burger';
import NavigationLink from '@/components/NavigationLink';
import { routes } from '@/constants/routes';
import VideoModal from '@/components/VideoModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import styles from './styles.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const translation = useTranslations('header');

  const handleToggleMenu = () => setIsOpen((prev) => !prev);

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
            toggleMenu={handleToggleMenu}
          />
          <ul className={cn(styles.header__links, isOpen ? styles.open : '')}>
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <NavigationLink
                  href={href}
                  data-cy={name}
                >
                  {translation(`links.${name}`)}
                </NavigationLink>
              </li>
            ))}
            <VideoModal buttonContent={translation('button')} />
          </ul>
        </div>
      </div>
    </header>
  );
}
