import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { Resend } from 'resend'
import { AccountConfirmationEmail } from '@/components/emails/account-confirmation-email'
import { ResetPasswordEmail } from '@/components/emails/reset-password-email'
import { db } from '@/database'

const resend = new Resend(process.env.RESEND_API_KEY!)

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  url: process.env.BETTER_AUTH_URL!,
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [user.email],
        subject: 'Verifique seu email',
        react: AccountConfirmationEmail({
          userEmail: user.email,
          confirmationUrl: url,
        }),
      })
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async data => {
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [data.user.email],
        subject: 'Redefinição de senha',
        react: ResetPasswordEmail({
          userEmail: data.user.email,
          resetLink: data.url,
        }),
      })
    },
  },
  plugins: [nextCookies()],
})
