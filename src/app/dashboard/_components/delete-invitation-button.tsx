'use client'

import toast from 'react-hot-toast'
import { FaTrash } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { deleteInvitation } from '../actions'

type DeleteInvitationButtonProps = {
  invitationId: string
}

export function DeleteInvitationButton({
  invitationId,
}: DeleteInvitationButtonProps) {
  const handleDelete = async () => {
    if (!confirm('Tem certeza que deseja excluir este convite?')) {
      return
    }

    const result = await deleteInvitation(invitationId)

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success('Convite excluído com sucesso!')
    }
  }

  return (
    <Button
      onClick={handleDelete}
      className="border-red-500 text-red-700 hover:bg-red-50"
      variant="outline"
      size="icon"
      aria-label="Excluir convite"
    >
      <FaTrash className="size-4" />
    </Button>
  )
}
