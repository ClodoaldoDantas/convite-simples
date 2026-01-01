import Link from 'next/link'
import { unauthorized } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'
import { getInvitationById } from '../../../actions'
import { EditInvitationForm } from '../../_components/edit-invitation-form'

type EditInvitePageProps = {
  params: Promise<{ id: string }>
}

export default async function EditInvitePage({ params }: EditInvitePageProps) {
  const { id } = await params

  const { data, error } = await getInvitationById(id)

  if (error || !data) {
    unauthorized()
  }

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
        <h1 className="text-2xl font-semibold text-zinc-900">Editar Convite</h1>
        <p className="text-zinc-500">
          Edite um convite existente para compartilhar com seus amigos.
        </p>
      </header>

      <div className="w-full p-6 bg-white border border-zinc-300 rounded-md">
        <EditInvitationForm invitation={data} />
      </div>
    </>
  )
}
