'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'

const schema = z
  .object({
    name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    email: z.email('Endereço de e-mail inválido'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'A confirmação de senha deve ter no mínimo 8 caracteres'),
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
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success(
            'Por favor, verifique seu e-mail para confirmar seu cadastro.',
          )
        },
        onError: ctx => {
          if (ctx.error.code === 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL') {
            toast.error(
              'Este e-mail já está em uso. Por favor, utilize outro e-mail.',
            )
            return
          }

          toast.error(
            'Ocorreu um erro ao tentar cadastrar. Tente novamente mais tarde.',
          )
        },
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
      <Logo />

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
