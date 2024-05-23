import { StaticImageData } from 'next/image';

import icon from '@/assets/icons/shuttle.svg';
import postImage1 from '@/assets/images/post-image-1.webp';

import { tags } from './tags';

export interface BlogPostFields {
  image: StaticImageData;
  category: string;
  title: string;
  text: string;
  date: string;
  author: string;
  content: { title: string; text: string; points: string[] };
  tags: string[];
  icon: string;
  id: number;
}

export const blogPosts: BlogPostFields[] = [
  {
    image: postImage1,
    category: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    date: '27th January, 2023',
    author: 'Floyd Miles',
    content: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
      points: [
        'Lorem ipsum dolor sit amet',
        'Non blandit massa enim nec scelerisque',
        'Neque egestas congue quisque egestas',
      ],
    },
    tags: [tags.Life],
    icon,
    id: 1,
  },
  {
    image: postImage1,
    category: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    date: '27th January, 2023',
    author: 'Floyd Miles',
    content: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
      points: [
        'Lorem ipsum dolor sit amet',
        'Non blandit massa enim nec scelerisque',
        'Neque egestas congue quisque egestas',
      ],
    },
    tags: [tags.Life],
    icon,
    id: 2,
  },
  {
    image: postImage1,
    category: 'Business',
    title: 'Design tips for designers that cover everything you need',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    date: '27th January, 2023',
    author: 'Floyd Miles',
    content: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
      points: [
        'Lorem ipsum dolor sit amet',
        'Non blandit massa enim nec scelerisque',
        'Neque egestas congue quisque egestas',
      ],
    },
    tags: [tags.Life],
    icon,
    id: 3,
  },
];
