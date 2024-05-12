import createMiddleware from 'next-intl/middleware';

import { localePrefix, locales, pathnames } from './navigation';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  matcher: ['/', '/(en|ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
