import Image from 'next/image';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';

import aboutBg from '@/assets/images/aboutBg.png';
import { statistic } from '@/constants/statistic';
import knowMoreAboutTeam from '@/assets/images/knowMoreAboutTeam.png';
import whyWeStarted from '@/assets/images/whyWeStarted.png';
import { authors } from '@/constants/authors';
import AuthorCard from '@/components/AuthorCard';
import { pickMessages } from '@/utils/pickMessages';
import Join from '@/components/Join';

import styles from './page.module.scss';

export default function About() {
  const translation = useTranslations('about');
  const messages = useMessages();

  return (
    <main className={styles.container}>
      <div>
        <div className={styles.about__upper}>
          <div className={styles.about__main}>
            <h5>{translation('subtitle')}</h5>
            <h1>{translation('title')}</h1>
          </div>
          <div className={styles.about__bottom}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.about__bg}>
          <div className={styles.about__stats}>
            <ul>
              {statistic.map(({ number, id, label }) => (
                <li key={id}>
                  <span>{number}</span>
                  <p>{translation(`statistic.${label}`)}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={aboutBg}
            alt='about-page-background'
          />
        </div>
        <div className={styles.mission}>
          <div className={styles.mission__column}>
            <h5>{translation('mission.subtitle')}</h5>
            <h3>{translation('mission.title')}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
              viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div>
            <h5>{translation('vision.subtitle')}</h5>
            <h3>{translation('vision.title')}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
              viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.team}>
        <div className={styles.team__info}>
          <h1>{translation('team.title')}</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className={styles.team__image}>
          <Image
            src={knowMoreAboutTeam}
            alt='know-more-about-our-team'
          />
        </div>
      </div>

      <div className={styles.why}>
        <div>
          <Image
            src={whyWeStarted}
            alt='why-we-started'
          />
        </div>
        <div className={styles.why__info}>
          <h2>{translation('why.title')}</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
      <div className={styles.authors}>
        <h2>{translation('author.title')}</h2>
        <div className={styles.authors__list}>
          {authors.map(({ avatar, name, role, company, id }) => (
            <AuthorCard
              key={id}
              avatar={avatar}
              name={name}
              role={role}
              company={company}
              id={id}
            />
          ))}
        </div>
      </div>
      <NextIntlClientProvider messages={pickMessages(messages, 'home')}>
        <Join />
      </NextIntlClientProvider>
    </main>
  );
}
