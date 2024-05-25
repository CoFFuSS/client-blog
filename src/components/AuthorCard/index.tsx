import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';
import SocialWrapper from '@/components/SocialWrapper';

import styles from './styles.module.scss';

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
