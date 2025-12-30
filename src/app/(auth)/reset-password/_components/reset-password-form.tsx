'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'

const schema = z
  .object({
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'A confirmação de senha deve ter no mínimo 8 caracteres'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

type ResetPasswordFormData = z.infer<typeof schema>

export function ResetPasswordForm() {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const handleResetPassword = async (data: ResetPasswordFormData) => {
    const token = new URLSearchParams(window.location.search).get('token')

    if (!token) {
      toast.error('Token de redefinição de senha ausente.')
      return
    }

    const { error } = await authClient.resetPassword({
      newPassword: data.password,
      token,
    })

    if (error) {
      toast.error('Houve um erro ao tentar redefinir a senha.')
      return
    }

    toast.success('Senha redefinida com sucesso!')
    router.push('/sign-in')
  }
  return (
    <form onSubmit={handleSubmit(handleResetPassword)} className="space-y-4">
      <div className="flex items-center justify-center">
        <FaEnvelopeOpenText className="size-10 text-orange-600" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="password">
          Nova Senha
        </label>

        <Input
          type="password"
          id="password"
          placeholder="********"
          {...register('password')}
        />

        <ErrorMessage error={errors.password} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="confirm-password">
          Confirmar Senha
        </label>

        <Input
          type="password"
          id="confirm-password"
          placeholder="********"
          {...register('confirmPassword')}
        />

        <ErrorMessage error={errors.confirmPassword} />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Redefinir senha
      </Button>
    </form>
  )
}
