'use client';

import { ComponentProps } from 'react';
import cn from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';

import { AppPathname, Link } from '@/navigation';

import styles from './styled.module.scss';

export default function NavigationLink<Pathname extends AppPathname>({
  href,
  children,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      className={cn(styles.common, {
        [styles.active]: isActive,
        [styles.unactive]: !isActive,
      })}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
