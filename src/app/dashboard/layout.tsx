import { redirect } from 'next/navigation'
import { verifySession } from '@/lib/session'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await verifySession()

  if (!session) {
    redirect('/sign-in')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 font-sans">{children}</div>
  )
}
