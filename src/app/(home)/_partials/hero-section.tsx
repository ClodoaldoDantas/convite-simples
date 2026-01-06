import Link from 'next/link'
import { FaPlay } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

export async function HeroSection() {
  return (
    <section className="py-32 bg-zinc-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl text-zinc-900 font-bold mb-4">
          Transforme seus eventos em momentos mágicos
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-3xl mx-auto">
          Crie convites digitais impressionantes em minutos. Personalize,
          compartilhe e encante seus convidados com designs únicos para qualquer
          ocasião.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <Button asChild>
            <Link href="/invite/demo">
              <FaPlay />
              Veja um exemplo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
