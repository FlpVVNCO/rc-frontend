import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const session = await getToken({
    req,
    // secret: process.env.NEXTAUTH_SECRET,
  });

  if (!(session && session.user.confirmed === 1)) {
    // Si la sesión no existe o el usuario no está confirmado, redirige a la página de inicio de sesión ('/login')
    const redirectURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(redirectURL.href);
  }

  return NextResponse.next();
}

export const config = {
  // Define aquí las rutas que deseas que sean manejadas por el middleware
  matcher: ["/", "/search", "/profile", "/book/:path*", "/bk"],
};
