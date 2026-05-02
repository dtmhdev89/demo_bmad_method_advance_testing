import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["vi", "en", "ja"];
const defaultLocale = "vi";

// Paths that require authentication
const PROTECTED_PATHS = ["/dashboard", "/study"];

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  if (acceptLanguage.includes("ja")) return "ja";
  if (acceptLanguage.includes("en")) return "en";
  return "vi";
}

export const proxy = auth((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // 1. Check if pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(req);
    nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(nextUrl);
  }

  // 2. Handle SKIP_AUTH
  if (process.env.SKIP_AUTH === "true") {
    return NextResponse.next();
  }

  const isLoggedIn = !!req.auth;

  // Remove locale prefix for checking protected paths
  const pathnameWithoutLocale = pathname.replace(/^\/(vi|en|ja)/, "");

  const isProtected = PROTECTED_PATHS.some((path) =>
    pathnameWithoutLocale.startsWith(path)
  );

  if (isProtected && !isLoggedIn) {
    const locale = pathname.split("/")[1] || defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/login`, nextUrl));
  }

  // Redirect logged-in users away from auth pages
  const isAuthPage =
    pathnameWithoutLocale.startsWith("/login") ||
    pathnameWithoutLocale.startsWith("/register");
    
  if (isAuthPage && isLoggedIn) {
    const locale = pathname.split("/")[1] || defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, nextUrl));
  }

  return NextResponse.next();
});

export default proxy;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
