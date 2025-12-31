import Link from 'next/link'
import { FaCircleExclamation, FaCircleInfo, FaPlus } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { InvitationListItem } from './_components/invitation-list-item'
import { SignOutButton } from './_components/sign-out-button'
import { getUserInvitations } from './actions'

export default async function DashboardPage() {
  const { data: invitations, error } = await getUserInvitations()

  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">
            Meus Convites
          </h1>
          <p className="text-zinc-500">Gerencie seus convites aqui.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/dashboard/invite/new">
              <FaPlus />
              Criar Convite
            </Link>
          </Button>

          <SignOutButton />
        </div>
      </header>

      {error ? (
        <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-md text-red-700 flex items-center justify-center gap-2">
          <FaCircleExclamation />
          <p>{error}</p>
        </div>
      ) : !invitations || invitations.length === 0 ? (
        <div className="mt-8 p-6 bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-md text-center text-zinc-600 flex items-center justify-center gap-2">
          <FaCircleInfo />
          <p>Você ainda não criou nenhum convite.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {invitations.map(invitation => (
            <InvitationListItem key={invitation.id} invitation={invitation} />
          ))}
        </div>
      )}
    </>
  )
}
