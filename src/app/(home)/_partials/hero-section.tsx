import Link from 'next/link'
import { FaPlay } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="py-32 bg-zinc-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl text-zinc-900 font-bold mb-4">
          Transforme seus eventos em momentos mágicos
        </h1>

        <p className="text-lg text-zinc-500 max-w-3xl mx-auto">
          Crie convites digitais impressionantes em minutos. Personalize,
          compartilhe e encante seus convidados com designs únicos para qualquer
          ocasião.
        </p>

        <div className="flex items-center justify-center gap-2 mt-8">
          <Button asChild>
            <Link href="/sign-up">Comece agora, é grátis</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard/invite/new">
              <FaPlay />
              Veja um exemplo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
