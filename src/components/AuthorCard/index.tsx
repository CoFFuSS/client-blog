import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import styles from './styled.module.scss';

import SocialWrapper from '../SocialWrapper';

interface AuthorCardProps {
  avatar: StaticImageData;
  name: string;
  role: string;
  company: string;
  id: number;
}

export default function AuthorCard({ avatar, name, role, company, id }: AuthorCardProps) {
  return (
    <div className={styles.container}>
      <Image
        src={avatar}
        alt={name}
      />
      <Link href={`${routes.author}/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h6>
        {role} @{company}
      </h6>
      <SocialWrapper />
    </div>
  );
}
