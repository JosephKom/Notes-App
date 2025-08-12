import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { AuthOptions } from "next-auth";


export const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};