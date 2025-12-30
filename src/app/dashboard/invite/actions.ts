'use server'

import { asc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ZodError, z } from 'zod'
import { db } from '@/database'
import { invitation } from '@/database/schema'
import { auth } from '@/lib/auth'

const invitationBodySchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().optional(),
  date: z.string().min(1, 'A data é obrigatória'),
  time: z.string().min(1, 'O horário é obrigatório'),
  address: z.string().min(1, 'O endereço é obrigatório'),
  occasionType: z.string().min(1, 'O tipo de ocasião é obrigatório'),
})

type InvitationData = z.infer<typeof invitationBodySchema>

export async function createInvitation(data: InvitationData) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user) {
      return {
        error: 'Você precisa estar autenticado para criar um convite',
      }
    }

    const payload = invitationBodySchema.parse(data)

    await db.insert(invitation).values({
      title: payload.title,
      description: payload.description,
      date: payload.date,
      time: payload.time,
      address: payload.address,
      occasionType: payload.occasionType,
      userId: session.user.id,
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        error: 'Dados inválidos. Verifique os campos e tente novamente.',
      }
    }

    return {
      error: 'Ocorreu um erro ao criar o convite. Tente novamente mais tarde.',
    }
  }

  redirect('/dashboard')
}

export async function updateInvitation(
  invitationId: string,
  data: InvitationData,
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user) {
      return {
        error: 'Você precisa estar autenticado para atualizar um convite',
      }
    }

    const payload = invitationBodySchema.parse(data)

    const result = await db
      .select()
      .from(invitation)
      .where(eq(invitation.id, invitationId))
      .limit(1)

    if (!result.length) {
      return {
        error: 'Convite não encontrado',
      }
    }

    const invitationItem = result[0]

    if (invitationItem.userId !== session.user.id) {
      return {
        error: 'Você não tem permissão para editar este convite',
      }
    }

    await db
      .update(invitation)
      .set({
        title: payload.title,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        address: payload.address,
        occasionType: payload.occasionType,
      })
      .where(eq(invitation.id, invitationId))
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        error: 'Dados inválidos. Verifique os campos e tente novamente.',
      }
    }

    return {
      error:
        'Ocorreu um erro ao atualizar o convite. Tente novamente mais tarde.',
    }
  }

  redirect('/dashboard')
}

export async function deleteInvitation(invitationId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user) {
      return {
        error: 'Você precisa estar autenticado para deletar um convite',
      }
    }

    const result = await db
      .select()
      .from(invitation)
      .where(eq(invitation.id, invitationId))
      .limit(1)

    if (!result.length) {
      return {
        error: 'Convite não encontrado',
      }
    }

    const invitationItem = result[0]

    if (invitationItem.userId !== session.user.id) {
      return {
        error: 'Você não tem permissão para deletar este convite',
      }
    }

    await db.delete(invitation).where(eq(invitation.id, invitationId))
  } catch (_error) {
    return {
      error:
        'Ocorreu um erro ao deletar o convite. Tente novamente mais tarde.',
    }
  }

  redirect('/dashboard')
}

export async function getUserInvitations() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user) {
      return {
        error: 'Você precisa estar autenticado',
        data: null,
      }
    }

    const result = await db
      .select({
        id: invitation.id,
        title: invitation.title,
        date: invitation.date,
        time: invitation.time,
      })
      .from(invitation)
      .where(eq(invitation.userId, session.user.id))
      .orderBy(asc(invitation.date))

    return {
      error: null,
      data: result,
    }
  } catch (_error) {
    return {
      error: 'Erro ao buscar convites. Tente novamente mais tarde.',
      data: null,
    }
  }
}
