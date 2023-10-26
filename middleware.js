import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (session && session.user.confirmed === 1) {
    return NextResponse.next();
  } else {
    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = `/login`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/books/", "/search/", "/profile/"],
};
