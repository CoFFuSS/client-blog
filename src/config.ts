import { Pathnames } from 'next-intl/navigation';

import { routes } from './constants/routes';

export const locales = ['en', 'ru'] as const;

export const pathnames: Record<string, string> = {
  '/': routes.home,
  '/post': routes.blog,
  '/about': routes.about,
  '/privacy': routes.privacy,
  '/contact': routes.contact,
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always';

export type AppPathname = keyof typeof pathnames;
