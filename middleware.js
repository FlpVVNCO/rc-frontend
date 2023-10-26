import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { getSession } from "next-auth/react";

// export async function middleware(req) {

//   const session = getSession({
//     req
//   })

//   // jwt.verify(token, TOKEN_SECRET, (err, user) => {
//   //   if (err) return res.status(403).json({ message: "Ïnvalid Token" });

//   //   req.user = user;
//   // });

//   // if (session.user.confirmed === 1) {
//   //   console.log("está confirmado");
//   return NextResponse.next();
//   // } else {
//   //   console.log("no está confirmado");
//   //   const requestedPage = req.nextUrl.pathname;
//   //   const url = req.nextUrl.clone();
//   //   url.pathname = `/login`;
//   //   url.search = `p=${requestedPage}`;
//   //   return NextResponse.redirect(url);
//   // }
// }
// import jwt from "jsonwebtoken";
// import Cookies from "js-cookie";
// import { parse } from "cookie";
// import { getToken, verify } from "next-auth/jwt";

// export function middleware(req) {

//   const cookies = Cookies.get();

// }

// import { NextResponse } from "next/server";
// import { verifyTokenRequest } from "./api/auth";

// import jwt from "jsonwebtoken";

// export async function middleware(request) {
//   const cookie = request.cookies.get("token");

//   const decoded = await decode({
//     token: cookie,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   if (!decoded)
//     return res.status(401).json({ message: "No token, authorization denied" });

//   if (decode) {
//     return NextResponse.next();
//   }
// }

import { jwtVerify } from "jose";

export async function middleware(request) {
  const cookie = request.cookies.get("token");

  if (!cookie || !cookie.value) {
    // Si no se encuentra el token en las cookies, puedes tomar una acción apropiada, como redirigir al usuario a la página de inicio de sesión.
    const requestedPage = request.nextUrl.pathname;
    const url = request.nextUrl.clone();
    url.pathname = `/login`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  const secret = process.env.NEXTAUTH_SECRET;
  const secretKey = new TextEncoder().encode(secret);

  try {
    const { payload } = await jwtVerify(cookie.value, secretKey, {
      algorithms: ["HS256"], // Reemplaza con el algoritmo correcto utilizado para firmar el token
    });

    if (payload.confirmed === 0) {
      // Si el usuario no está confirmado, redirige al usuario al inicio de sesión.
      const requestedPage = request.nextUrl.pathname;
      const url = request.nextUrl.clone();
      url.pathname = `/login`;
      url.search = `p=${requestedPage}`;
      return NextResponse.redirect(url);
    }

    // Si el usuario está confirmado (confirmed === 1), permite el acceso a la página deseada.
    return await NextResponse.next();
  } catch (error) {
    // El token no es válido. Puedes tomar una acción apropiada, como redirigir al usuario o devolver un error.
    console.error(error);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/books/((?!books).*)", "/search/((?!search).*)", "/profile"],
};
