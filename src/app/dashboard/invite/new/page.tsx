import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import { AddInvitationForm } from '../_components/add-invitation-form'

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
        <AddInvitationForm />
      </div>
    </>
  )
}
