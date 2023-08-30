import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import LineProvider from "next-auth/providers/line";

export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  // secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_APP_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    // }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID || "",
      clientSecret: process.env.LINE_CLIENT_SECRET || "",
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
