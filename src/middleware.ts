import createMiddleware from 'next-intl/middleware';

import { localePrefix, locales, pathnames } from './config';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ['/', '/(en|ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};

// middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// import { locales } from './config'; // your locales configuration

// const defaultLocale = 'en';

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
//   );

//   if (pathnameIsMissingLocale) {
//     const locale =
//       req.headers.get('accept-language')?.split(',')?.[0].split('-')?.[0] ?? defaultLocale;

//     const redirectUrl = new URL(`/${locale}${pathname}`, req.url);

//     return NextResponse.redirect(redirectUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
// };
