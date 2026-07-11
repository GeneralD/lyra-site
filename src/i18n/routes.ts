// Locale-aware URL construction, shared by Layout (canonical/hreflang) and
// LangSwitcher. The default locale lives at the root; every other locale is
// served under its own /<locale>/ prefix.
import { defaultLocale, locales, type Locale } from "./translations";

const prefixPattern = new RegExp(
  `^/(${locales.filter((l) => l !== defaultLocale).join("|")})(?=/|$)`,
);

/** Locale-independent path: the pathname with any locale prefix stripped. */
export const basePathOf = (pathname: string): string =>
  pathname.replace(prefixPattern, "") || "/";

/** The same page's path under the given locale. */
export const localePath = (locale: Locale, pathname: string): string => {
  const base = basePathOf(pathname);
  if (locale === defaultLocale) return base;
  return base === "/" ? `/${locale}/` : `/${locale}${base}`;
};
