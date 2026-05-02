import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Paths that require authentication
const PROTECTED_PATHS = ["/dashboard"];

export default auth((req) => {
  if (process.env.SKIP_AUTH === "true") {
    return NextResponse.next();
  }

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isProtected = PROTECTED_PATHS.some((path) =>
    nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  // Redirect logged-in users away from auth pages
  const isAuthPage =
    nextUrl.pathname.startsWith("/login") ||
    nextUrl.pathname.startsWith("/register");
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
