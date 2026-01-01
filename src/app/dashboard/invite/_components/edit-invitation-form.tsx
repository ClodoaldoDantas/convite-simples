'use client'

import toast from 'react-hot-toast'
import { updateInvitation } from '../../actions'
import type { OccasionType } from '../_constants/occasion-types'
import { InvitationForm, type InvitationPayload } from './invitation-form'

type EditInvitationFormProps = {
  invitation: {
    id: string
    title: string
    description: string | null
    date: string
    time: string
    address: string
    occasionType: string
  }
}

export function EditInvitationForm({ invitation }: EditInvitationFormProps) {
  const handleUpdateInvitation = async (data: InvitationPayload) => {
    const result = await updateInvitation(invitation.id, data)

    if (result?.error) {
      toast.error(result.error)
    }
  }

  return (
    <InvitationForm
      submitLabel="Salvar alterações"
      onSubmit={handleUpdateInvitation}
      initialData={{
        title: invitation.title,
        description: invitation.description,
        date: invitation.date,
        time: invitation.time,
        address: invitation.address,
        occasionType: invitation.occasionType as OccasionType,
      }}
    />
  )
}
