import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginRequest } from "../../../../axios/auth";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await loginRequest(credentials);

          if (res.data.confirmed === 1) {
            return res.data;
          } else {
            // Si el correo no está confirmado, puedes lanzar una excepción o retornar un mensaje de error
            return console.log("confirma tu correo");
          }
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
