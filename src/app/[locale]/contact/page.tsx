import 'mapbox-gl/dist/mapbox-gl.css';

import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import Link from 'next/link';

import ContactForm from '@/components/ContactForm';
import { pickMessages } from '@/utils/pickMessages';
import { Map } from '@/components/Map';

import styles from './page.module.scss';

export default function Contact() {
  const translation = useTranslations('contact');
  const messages = useMessages();

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h5>{translation('subtitle')}</h5>
        <h1>{translation('title')}</h1>
        <p className={styles.content__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <div className={styles.info}>
          <div>
            <h6 className={styles.info__upper}>Working hours</h6>
            <div className={styles.info__worktime}>
              <span>Monday To Friday</span>
              <span>9:00 AM to 8:00 PM</span>
            </div>
            <h6 className={styles.info__bottom}>Our Support Team is available 24/7</h6>
          </div>
          <div>
            <h6 className={styles.info__upper}>Contact Us</h6>
            <div className={styles.info__worktime}>
              <Link href='tel:+375291112233'>020 7993 2905</Link>
              <Link
                href='mailto:hello@finsweet.com'
                className={styles.info__bottom}
              >
                hello@finsweet.com
              </Link>
            </div>
          </div>
        </div>
        <NextIntlClientProvider messages={pickMessages(messages, 'contact')}>
          <ContactForm />
        </NextIntlClientProvider>
      </div>
      <Map />
    </main>
  );
}
