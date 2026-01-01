'use client'

import toast from 'react-hot-toast'
import { FaShareNodes } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

type ShareInviteButtonProps = {
  invitationId: string
}

export function ShareInviteButton({ invitationId }: ShareInviteButtonProps) {
  const handleShareInvite = async () => {
    const inviteUrl = `${window.location.origin}/invite/${invitationId}`
    await window.navigator.clipboard.writeText(inviteUrl)

    toast.success('Link do convite copiado para a área de transferência!')
  }

  return (
    <Button variant="outline" size="sm" onClick={handleShareInvite}>
      <FaShareNodes />
      Compartilhar
    </Button>
  )
}
