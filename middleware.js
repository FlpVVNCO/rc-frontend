import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getToken } from "next-auth/jwt";
import Cookies from "js-cookie";

export async function middleware(req) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (session && session.user.confirmed === 1) {
    console.log("está confirmado");
    return NextResponse.next();
  } else {
    console.log("no está confirmado");
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
