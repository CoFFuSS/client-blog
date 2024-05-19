import { authors } from '@/constants/authors';

import styles from './styled.module.scss';

import AuthorCard from '../AuthorCard';

export default function Author() {
  return (
    <section className={styles.container}>
      <h4>List of Authors</h4>
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
