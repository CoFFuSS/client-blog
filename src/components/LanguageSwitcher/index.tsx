'use client';

import { useLocale } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';

import { usePathname, useRouter } from '@/navigation';
import { locales } from '@/config';

import styles from './styles.module.scss';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();
  const [, startTransition] = useTransition();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      router.replace(pathName, { locale: e.target.value });
    });
  };

  return (
    <div className={styles.wrapper}>
      <select
        defaultValue={locale}
        onChange={handleSelectChange}
        className={styles.select}
      >
        {locales.map((lang) => (
          <option
            key={lang}
            value={lang}
            data-cy='language-switcher'
            className={styles.option}
          >
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
