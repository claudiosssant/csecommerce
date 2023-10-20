import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    ],
  };

function GoogleProvider(arg0: { clientId: string; clientSecret: string; }): import("next-auth/providers/index").Provider {
  throw new Error("Function not implemented.");
}
