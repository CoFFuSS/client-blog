import { Pathnames, createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { routes } from './constants/routes';

export const locales = ['en', 'ru'] as const;

export const pathnames: Record<string, string> = {
  '/': routes.home,
  '/blog': routes.blog,
  '/blog/[slug]': routes.post,
  '/about': routes.about,
  '/category': routes.category,
  '/author': routes.author,
  '/privacy': routes.privacy,
  '/contact': routes.contact,
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

export type AppPathname = keyof typeof pathnames;
