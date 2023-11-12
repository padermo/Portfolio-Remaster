import createMiddleware from 'next-intl/middleware';

type Data = {
  locales:string[],
  defaultLocale:string
}

const Info: Data = {
  locales: ['en','es'],
  defaultLocale:'en'
}

export default createMiddleware(Info)
export const config = {matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']}