'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { navLinks } from '@/constants/navLinks';
import { Burger } from '@/components/Burger';
import NavigationLink from '@/components/NavigationLink';

import styles from './styled.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('header');

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h4>Modsen Client Blog</h4>
        <select>
          <option value='rus' />
          <option value='en' />
        </select>
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
            <button type='button'>Video about us</button>
          </ul>
        </div>
      </div>
    </header>
  );
}
