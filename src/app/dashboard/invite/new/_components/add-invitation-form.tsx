'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { createInvitation } from '../../actions'

const schema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().optional(),
  date: z.string().min(1, 'A data é obrigatória'),
  time: z.string().min(1, 'O horário é obrigatório'),
  address: z.string().min(1, 'O endereço é obrigatório'),
  occasionType: z.string().min(1, 'O tipo de ocasião é obrigatório'),
})

type AddInvitationFormData = z.infer<typeof schema>

export function AddInvitationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<AddInvitationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      date: '',
      time: '',
      address: '',
      occasionType: '',
    },
  })

  const handleNewInvitation = async (data: AddInvitationFormData) => {
    const result = await createInvitation(data)

    if (result?.error) {
      toast.error(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleNewInvitation)} className="space-y-4">
      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="title">
          Título do convite
        </label>

        <Input
          type="text"
          id="title"
          placeholder="Ex: Festa de Aniversário"
          {...register('title')}
        />

        <ErrorMessage error={errors.title} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="description">
          Descrição
        </label>

        <Input
          type="text"
          id="description"
          placeholder="Ex: Venha comemorar comigo!"
          {...register('description')}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="font-medium text-zinc-900" htmlFor="date">
            Data
          </label>

          <Input type="date" id="date" {...register('date')} />

          <ErrorMessage error={errors.date} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-zinc-900" htmlFor="time">
            Horário
          </label>

          <Input type="time" id="time" {...register('time')} />

          <ErrorMessage error={errors.time} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="address">
          Endereço
        </label>

        <Input
          type="text"
          id="address"
          placeholder="Ex: Rua das Flores, 123"
          {...register('address')}
        />

        <ErrorMessage error={errors.address} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="occasionType">
          Tipo de Ocasião
        </label>

        <Input
          type="text"
          id="occasionType"
          placeholder="Ex: Aniversário, Casamento, Formatura"
          {...register('occasionType')}
        />

        <ErrorMessage error={errors.occasionType} />
      </div>

      <div className="flex items-center justify-between">
        <Button type="submit" disabled={isSubmitting}>
          Criar Convite
        </Button>
      </div>
    </form>
  )
}
