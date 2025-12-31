'use client'

import toast from 'react-hot-toast'
import { createInvitation } from '../actions'
import { InvitationForm, type InvitationPayload } from './invitation-form'

export function AddInvitationForm() {
  const handleNewInvitation = async (data: InvitationPayload) => {
    const result = await createInvitation(data)

    if (result?.error) {
      toast.error(result.error)
    }
  }

  return <InvitationForm onSubmit={handleNewInvitation} />
}
