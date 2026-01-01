import Link from 'next/link'
import {
  FaArrowRightFromBracket,
  FaLock,
  FaPlay,
  FaRegCalendar,
  FaShare,
  FaUserPlus,
} from 'react-icons/fa6'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="font-sans">
      <header className="container mx-auto p-4 flex items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-in">
              <FaArrowRightFromBracket />
              Entra na plataforma
            </Link>
          </Button>

          <Button asChild size="sm">
            <Link href="/sign-up">
              <FaUserPlus />
              Criar uma conta
            </Link>
          </Button>
        </nav>
      </header>

      <section className="py-32 bg-zinc-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl text-zinc-900 font-bold mb-4">
            Transforme seus eventos em momentos mágicos
          </h1>

          <p className="text-lg text-zinc-500 max-w-3xl mx-auto">
            Crie convites digitais impressionantes em minutos. Personalize,
            compartilhe e encante seus convidados com designs únicos para
            qualquer ocasião.
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-zinc-900 font-semibold mb-12">
            Tudo que você precisa para criar convites perfeitos
          </h2>

          <ul className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            <li className="border border-zinc-200 p-6 rounded-md">
              <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                <FaRegCalendar className="size-5" />
              </div>

              <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                Convites Personalizados
              </h3>

              <p className="text-zinc-500">
                Crie convites únicos para qualquer ocasião: Natal, Ano Novo,
                aniversários e muito mais.
              </p>
            </li>

            <li className="border border-zinc-200 p-6 rounded-md">
              <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                <FaShare className="size-5" />
              </div>

              <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                Compartilhe Facilmente
              </h3>

              <p className="text-zinc-500">
                Envie seus convites por WhatsApp, email ou compartilhe o link
                diretamente.
              </p>
            </li>

            <li className="border border-zinc-200 p-6 rounded-md">
              <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                <FaLock className="size-5" />
              </div>

              <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                Painel Administrativo
              </h3>

              <p className="text-zinc-500">
                Gerencie seus convites com facilidade através de um painel
                administrativo intuitivo e eficiente.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
