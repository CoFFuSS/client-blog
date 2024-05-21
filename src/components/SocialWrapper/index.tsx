import Image from 'next/image';

import Instagram from '@/assets/icons/Instagram.svg';
import Facebook from '@/assets/icons/Facebook.svg';
import Twitter from '@/assets/icons/Twitter.svg';
import LinkedIn from '@/assets/icons/LinkedIn.svg';

import styles from './styles.module.scss';

export default function SocialWrapper() {
  return (
    <div className={styles.container}>
      <Image
        src={Instagram}
        alt='instagram-icon'
      />
      <Image
        src={Facebook}
        alt='facebook-icon'
      />
      <Image
        src={Twitter}
        alt='twitter-icon'
      />
      <Image
        src={LinkedIn}
        alt='linkedin-icon'
      />
    </div>
  );
}
