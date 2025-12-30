'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'

import { authClient } from '@/lib/auth-client'

const schema = z.object({
  email: z.email('Endereço de e-mail inválido'),
})

type ForgotPasswordFormData = z.infer<typeof schema>

export function ForgotPasswordForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  const handleSubmitPasswordReset = async (data: ForgotPasswordFormData) => {
    const { error } = await authClient.requestPasswordReset({
      email: data.email,
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      toast.error(
        'Houve um erro ao tentar enviar o e-mail de recuperação de senha.',
      )
      return
    }

    toast('Verifique seu e-mail para redefinir sua senha.', {
      icon: '📬',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitPasswordReset)}
      className="space-y-4"
    >
      <div className="flex items-center justify-center">
        <FaEnvelopeOpenText className="size-10 text-orange-600" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="email">
          E-mail
        </label>

        <Input
          type="email"
          id="email"
          placeholder="you@example.com"
          {...register('email')}
        />

        <ErrorMessage error={errors.email} />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Recuperar senha
      </Button>
    </form>
  )
}
