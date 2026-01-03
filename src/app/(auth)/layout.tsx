type AuthLayoutProps = {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-dvh px-4 flex items-center justify-center font-sans">
      <div className="max-w-md w-full p-6 bg-white border border-zinc-300 rounded-md">
        {children}
      </div>
    </main>
  )
}
