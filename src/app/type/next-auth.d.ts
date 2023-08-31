import NextAuth, { DefaultSession } from "next-auth";
import { UserInfoType } from "./user";

export type ServerSession = {
  user: UserInfoType;
} | null;
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserInfoType;
    error: any;
  }
  interface jwt {
    user: UserInfoType;
  }
}
