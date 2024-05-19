import { useTranslations } from 'next-intl';

import { categoryCards } from '@/constants/categoryCard';
import CategoryCard from '@/components/CategoryCard';

import styles from './styled.module.scss';

export default function ChooseCategory() {
  const t = useTranslations('home.category');

  return (
    <section className={styles.container}>
      <h2>{t('title')}</h2>
      <div className={styles.grid}>
        {categoryCards.map(({ label, icon, text }) => (
          <div key={label}>
            <CategoryCard
              label={t(`${label}.title`)}
              icon={icon}
              text={text}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
