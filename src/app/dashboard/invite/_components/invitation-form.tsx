'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import {
  type OccasionType,
  OccasionTypeSelect,
} from '../_components/occasion-type-select'

export const invitationFormSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().nullable(),
  date: z.string().min(1, 'A data é obrigatória'),
  time: z.string().min(1, 'O horário é obrigatório'),
  address: z.string().min(1, 'O endereço é obrigatório'),
})

type InvitationFormData = z.infer<typeof invitationFormSchema>

export type InvitationPayload = InvitationFormData & {
  occasionType: OccasionType
}

type InvitationFormProps = {
  initialData?: InvitationPayload
  onSubmit: (data: InvitationPayload) => Promise<void>
  submitLabel?: string
}

export function InvitationForm({
  initialData,
  onSubmit,
  submitLabel = 'Criar Convite',
}: InvitationFormProps) {
  const [occasionType, setOccasionType] = useState<OccasionType>(
    initialData?.occasionType || 'birthday',
  )

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<InvitationFormData>({
    resolver: zodResolver(invitationFormSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      date: initialData?.date || '',
      time: initialData?.time || '',
      address: initialData?.address || '',
    },
  })

  const onSubmitHandler = async (data: InvitationFormData) => {
    await onSubmit({ ...data, occasionType })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      <div className="flex flex-col gap-1.5">
        <span className="font-medium text-zinc-900">Tipo de Ocasião</span>

        <OccasionTypeSelect
          value={occasionType}
          onChange={value => setOccasionType(value)}
        />
      </div>

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

      <div className="flex items-center justify-between">
        <Button type="submit" disabled={isSubmitting}>
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
