import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { db } from '@/database'
import { sendEmail } from './send-email'

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  url: process.env.BETTER_AUTH_URL!,
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        email: user.email,
        subject: 'Verifique seu email',
        body: `<p>Por favor, verifique seu email: <a href="${url}">${url}</a></p>`,
      })
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async data => {
      await sendEmail({
        email: data.user.email,
        subject: 'Resetar sua senha',
        body: `<p>Clique no link para resetar sua senha: <a href="${data.url}">${data.url}</a></p>`,
      })
    },
  },
  plugins: [nextCookies()],
})
