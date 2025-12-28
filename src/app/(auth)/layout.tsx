import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

type AuthLayoutProps = {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect('/dashboard')
  }

  return (
    <main className="h-screen flex items-center justify-center font-sans">
      <div className="max-w-md w-full p-6 bg-white border border-zinc-300 rounded-md">
        {children}
      </div>
    </main>
  )
}
