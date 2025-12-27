'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'

const schema = z
  .object({
    name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    email: z.email('Endereço de e-mail inválido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z
      .string()
      .min(6, 'A confirmação de senha deve ter no mínimo 6 caracteres'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

type SignUpFormData = z.infer<typeof schema>

export function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleSignUp = async (data: SignUpFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
      <div className="flex items-center justify-center">
        <FaEnvelopeOpenText className="size-10 text-orange-600" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="name">
          Nome
        </label>

        <Input
          type="text"
          id="name"
          placeholder="Seu nome"
          {...register('name')}
        />

        <ErrorMessage error={errors.name} />
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

      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-zinc-900" htmlFor="password">
          Senha
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
        Cadastre-se
      </Button>
    </form>
  )
}
