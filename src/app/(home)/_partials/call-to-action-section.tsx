import { headers } from 'next/headers'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'

export async function CallToActionSection() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <section className="py-16 bg-zinc-800 text-white">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-3xl text-center font-semibold mb-2">
          Pronto para criar seu primeiro convite?
        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-6">
          É grátis, rápido e fácil. Comece agora mesmo!
        </p>

        {session ? (
          <Button asChild className="bg-white text-zinc-900 hover:bg-zinc-200">
            <Link href="/dashboard/invite/new">Criar um convite agora</Link>
          </Button>
        ) : (
          <Button asChild className="bg-white text-zinc-900 hover:bg-zinc-200">
            <Link href="/sign-up">Comece agora, é grátis</Link>
          </Button>
        )}
      </div>
    </section>
  )
}
