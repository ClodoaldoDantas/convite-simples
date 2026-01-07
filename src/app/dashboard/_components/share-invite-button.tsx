'use client'

import toast from 'react-hot-toast'
import { FaShareNodes } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

type ShareInviteButtonProps = {
  invitationTitle: string
  invitationId: string
}

export function ShareInviteButton({
  invitationTitle,
  invitationId,
}: ShareInviteButtonProps) {
  const handleShareInvite = async () => {
    const inviteUrl = `${window.location.origin}/invite/${invitationId}`

    if (navigator.share) {
      navigator.share({ title: invitationTitle, url: inviteUrl })
    } else {
      navigator.clipboard.writeText(inviteUrl).then(() => {
        toast.success('Link do convite copiado para a área de transferência!')
      })
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleShareInvite}>
      <FaShareNodes />
      Compartilhar
    </Button>
  )
}
