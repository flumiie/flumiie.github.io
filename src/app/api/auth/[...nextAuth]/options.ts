import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

const gitHubOpts = {
  clientId: process.env.GITHUB_APP_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string
}
const credOpts: ReturnType<typeof Credentials> = {
  id: "1",
  type: "credentials",
  name: "Credentials",
  credentials: {
    username: {
      label: "Username: ",
      type: "text",
      placeholder: "Your username"
    },
    password: {
      label: "Password: ",
      type: "password",
      placeholder: "Your password"
    }
  },
  async authorize(credentials) {
    const user = {
      id: "1",
      name: "Fer",
      password: "123456"
    }

    if (credentials?.username === user.name && credentials?.password === user.password) {
      return user
    } else {
      return null
    }
  }
}

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider(gitHubOpts),
    Credentials(credOpts)
  ],
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token, user }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
}