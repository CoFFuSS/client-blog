import { useTranslations } from 'next-intl';

import { authors } from '@/constants/authors';
import AuthorCard from '@/components/AuthorCard';

import styles from './styles.module.scss';

export default function Author() {
  const translation = useTranslations('home.authors');

  return (
    <section className={styles.container}>
      <h4>{translation('title')}</h4>
      <div className={styles.content}>
        {authors.slice(0, 4).map(({ avatar, name, role, company, id }) => (
          <AuthorCard
            key={name}
            avatar={avatar}
            name={name}
            role={role}
            company={company}
            id={id}
          />
        ))}
      </div>
    </section>
  );
}
