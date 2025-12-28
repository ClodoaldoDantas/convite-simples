'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ZodError, z } from 'zod'
import { db } from '@/database'
import { invitation } from '@/database/schema'
import { auth } from '@/lib/auth'

const createInvitationSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().optional(),
  date: z.string().min(1, 'A data é obrigatória'),
  time: z.string().min(1, 'O horário é obrigatório'),
  address: z.string().min(1, 'O endereço é obrigatório'),
  occasionType: z.string().min(1, 'O tipo de ocasião é obrigatório'),
})

export async function createInvitation(
  data: z.infer<typeof createInvitationSchema>,
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user) {
      return {
        error: 'Você precisa estar autenticado para criar um convite',
      }
    }

    const payload = createInvitationSchema.parse(data)

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
