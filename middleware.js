import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const cookie = request.cookies.get("token");

  if (!cookie || !cookie.value) {
    // Si no se encuentra el token en las cookies, puedes tomar una acción apropiada, como redirigir al usuario a la página de inicio de sesión.
    const requestedPage = request.nextUrl.pathname;
    const url = request.nextUrl.clone();
    url.pathname = `/login`;
    url.search = `${requestedPage}`;
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
      url.search = `${requestedPage}`;
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
  matcher: ["/", "/books/((?!general).*)", "/search", "/profile", "/books/"],
};
