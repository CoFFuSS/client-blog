import cn from 'classnames';
import { MouseEventHandler } from 'react';

import styles from './styled.module.scss';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}

export function Burger({ isOpen, toggleMenu }: BurgerProps) {
  return (
    <button
      onClick={toggleMenu}
      className={cn(styles.burger, isOpen ? styles.open : '')}
      type='button'
    >
      {Array.from({ length: 3 }, (_, k) => k + 1).map((idx) => (
        <span
          key={idx}
          className={styles.line}
        />
      ))}
    </button>
  );
}
