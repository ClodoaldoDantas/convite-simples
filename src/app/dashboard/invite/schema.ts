import { z } from 'zod'

export const invitationFormSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().optional(),
  date: z.string().min(1, 'A data é obrigatória'),
  time: z.string().min(1, 'O horário é obrigatório'),
  address: z.string().min(1, 'O endereço é obrigatório'),
})

export type InvitationFormData = z.infer<typeof invitationFormSchema>
