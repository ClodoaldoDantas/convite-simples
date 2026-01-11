import Link from 'next/link'
import { FaCalendar, FaEye, FaPencil } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/utils/date'
import {
  type OccasionType,
  occasionTypes,
} from '../invite/_constants/occasion-types'
import { DeleteInvitationButton } from './delete-invitation-button'
import { ShareInviteButton } from './share-invite-button'

interface InvitationListItemProps {
  invitation: {
    id: string
    title: string
    date: string
    time: string
    occasionType: string
  }
}

export function InvitationListItem({ invitation }: InvitationListItemProps) {
  const icon = occasionTypes[invitation.occasionType as OccasionType].icon

  return (
    <div className="p-5 bg-white border border-zinc-300 rounded-md h-full flex flex-col gap-4 md:flex-row md:items-center justify-between">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-zinc-900 mb-1">
          {icon} {invitation.title}
        </h3>

        <div className="flex items-center text-zinc-600 gap-2">
          <FaCalendar className="" />
          <p className="text-sm text-zinc-600 line-clamp-2">
            {formatDate(invitation.date)} às {invitation.time}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button asChild variant="outline" size="icon">
          <Link href={`/invite/${invitation.id}`} aria-label="Ver convite">
            <FaEye className="size-4" />
          </Link>
        </Button>

        <ShareInviteButton
          invitationTitle={invitation.title}
          invitationId={invitation.id}
        />

        <Button asChild variant="outline" size="icon">
          <Link
            href={`/dashboard/invite/edit/${invitation.id}`}
            aria-label="Editar convite"
          >
            <FaPencil className="size-4" />
          </Link>
        </Button>

        <DeleteInvitationButton invitationId={invitation.id} />
      </div>
    </div>
  )
}
