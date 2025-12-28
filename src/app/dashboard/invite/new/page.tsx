import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewInvitePage() {
  return (
    <>
      <nav>
        <Link
          className="flex items-center gap-2 text-zinc-900 hover:text-blue-600 transition-colors"
          href="/dashboard"
        >
          <FaArrowLeft />
          Voltar para o Dashboard
        </Link>
      </nav>

      <header className="my-8">
        <h1 className="text-2xl font-semibold text-zinc-900">Novo Convite</h1>
        <p className="text-zinc-500">
          Crie um novo convite para compartilhar com seus amigos.
        </p>
      </header>

      <div className="w-full p-6 bg-white border border-zinc-300 rounded-md">
        <form className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-zinc-900" htmlFor="title">
              Título do convite
            </label>

            <Input
              type="text"
              id="title"
              placeholder="Ex: Festa de Aniversário"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="font-medium text-zinc-900" htmlFor="date">
                Data
              </label>

              <Input type="date" id="date" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-zinc-900" htmlFor="time">
                Horário
              </label>

              <Input type="time" id="time" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-zinc-900" htmlFor="address">
              Endereço
            </label>

            <Input
              type="text"
              id="address"
              placeholder="Ex: Rua das Flores, 123"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit">Criar Convite</Button>
          </div>
        </form>
      </div>
    </>
  )
}
