import Link from 'next/link'
import {
  FaArrowLeft,
  FaEnvelopeOpen,
  FaRegCalendar,
  FaRegClock,
  FaRegMap,
} from 'react-icons/fa6'
import { Divider } from '@/components/divider'
import { InviteInfoCard } from '../_components/invite-info-card'

export default function InviteDemoPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-dvh w-full flex flex-col items-center gap-4 justify-center font-sans px-4">
      <nav className="max-w-lg w-full">
        <Link
          className="flex items-center gap-2 text-zinc-900 hover:text-blue-600 transition-colors"
          href="/"
        >
          <FaArrowLeft />
          Voltar para Página Inicial
        </Link>
      </nav>

      <div className="max-w-lg w-full p-4 md:p-6 bg-white border border-zinc-300 rounded-md">
        <header className="text-center flex flex-col">
          <span role="img" className="text-5xl mb-4">
            🎁
          </span>

          <span className="uppercase text-sm text-zinc-600 tracking-wider mb-4">
            Convite Especial
          </span>

          <h1 className="text-2xl md:text-3xl text-zinc-900 font-semibold">
            Festa de Aniversário
          </h1>

          <p className="text-zinc-500 mt-2">Venha comemorar conosco!</p>
        </header>

        <Divider>
          <FaEnvelopeOpen className="text-orange-600" />
        </Divider>

        <section>
          <ul className="flex flex-col gap-2">
            <InviteInfoCard
              icon={FaRegCalendar}
              label="Data"
              value={`13 de Julho de ${currentYear}`}
            />

            <InviteInfoCard icon={FaRegClock} label="Horário" value="19:00" />

            <InviteInfoCard
              icon={FaRegMap}
              label="Endereço"
              value="Rua das Flores, 123"
            />
          </ul>
        </section>
      </div>
    </main>
  )
}
