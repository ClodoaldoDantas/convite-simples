import Link from 'next/link'
import { FaCalendar, FaEye, FaPencil, FaTrash } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/utils/date'

interface InvitationListItemProps {
  invitation: {
    id: string
    title: string
    date: string
    time: string
  }
}

export function InvitationListItem({ invitation }: InvitationListItemProps) {
  return (
    <div className="p-5 bg-white border border-zinc-300 rounded-md h-full flex items-center justify-between">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-zinc-900 mb-1">
          {invitation.title}
        </h3>

        <div className="flex items-center text-zinc-600 gap-2">
          <FaCalendar className="" />
          <p className="text-sm text-zinc-600 line-clamp-2">
            {formatDate(invitation.date)} às {invitation.time}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={`/invitation/${invitation.id}`}>
            <FaEye />
            Visualizar
          </Link>
        </Button>

        <Button asChild variant="outline" size="sm">
          <Link href={`/dashboard/invite/edit/${invitation.id}`}>
            <FaPencil />
            Editar
          </Link>
        </Button>

        <Button
          className="border-red-500 text-red-700 hover:bg-red-50"
          variant="outline"
          size="sm"
        >
          <FaTrash />
          Excluir
        </Button>
      </div>
    </div>
  )
}
