import Link from 'next/link'
import { InviteCard } from '@/components/invite-card'
import { Button } from '@/components/ui/button'

export async function HeroSection() {
  const dateISO = new Date().toISOString()

  return (
    <section className="py-20 lg:py-32 bg-zinc-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left lg:max-w-1/2">
          <h1 className="text-4xl md:text-5xl text-zinc-900 font-bold mb-4">
            Transforme seus eventos em momentos mágicos
          </h1>

          <p className="text-base md:text-lg text-zinc-500 max-w-2xl mb-6">
            Crie convites digitais impressionantes em minutos. Personalize,
            compartilhe e encante seus convidados com designs únicos para
            qualquer ocasião.
          </p>

          <Button className="hidden lg:block lg:w-fit" asChild>
            <Link href="/sign-up">Comece agora</Link>
          </Button>
        </div>

        <InviteCard
          icon="🎁"
          title="Festa de Aniversário"
          description="Venha comemorar conosco!"
          date={dateISO}
          time="19:00"
          address="Rua das Flores, 123"
        />
      </div>
    </section>
  )
}
