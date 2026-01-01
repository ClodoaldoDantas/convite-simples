'use server'

import { eq } from 'drizzle-orm'
import { db } from '@/database'
import { invitation } from '@/database/schema'

export async function getInvitationById(invitationId: string) {
  try {
    const result = await db
      .select({
        title: invitation.title,
        description: invitation.description,
        date: invitation.date,
        time: invitation.time,
        address: invitation.address,
        occasionType: invitation.occasionType,
      })
      .from(invitation)
      .where(eq(invitation.id, invitationId))
      .limit(1)

    if (!result.length) {
      return {
        error: 'Convite não encontrado',
        data: null,
      }
    }

    return {
      error: null,
      data: result[0],
    }
  } catch (_error) {
    return {
      error: 'Erro ao buscar o convite. Tente novamente mais tarde.',
      data: null,
    }
  }
}
