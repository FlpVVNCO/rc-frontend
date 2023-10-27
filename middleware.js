import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default withAuth(
  async function middleware(req) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!session) {
      const requestedPage = req.nextUrl.pathname;
      const url = req.nextUrl.clone();
      url.pathname = `/login`;
      url.search = `p=${requestedPage}`;
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.user.confirmed === 1,
    },
  }
);

// export async function middleware(req) {
//   const session = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   if (!session || session.user.confirmed === 0) {
//     console.log("no está confirmado");
//     const requestedPage = req.nextUrl.pathname;
//     const url = req.nextUrl.clone();
//     url.pathname = `/login`;
//     url.search = `p=${requestedPage}`;
//     return NextResponse.redirect(url);
//   }

//   console.log("está confirmado");
//   return NextResponse.redirect();
// }
// // See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/search", "/profile", "/books/:path*"],
};
