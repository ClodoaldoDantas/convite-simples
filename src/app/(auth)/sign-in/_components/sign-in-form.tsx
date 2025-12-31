'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'

const schema = z.object({
  email: z.email('Endereço de e-mail inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
})

type SignInFormData = z.infer<typeof schema>

export function SignInForm() {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSignIn = async (data: SignInFormData) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          router.push('/dashboard')
        },
        onError: ctx => {
          if (ctx.error.code === 'INVALID_EMAIL_OR_PASSWORD') {
            toast.error('Credenciais inválidas. Por favor, tente novamente.')
            return
          }

          toast.error(
            'Ocorreu um erro ao tentar entrar. Tente novamente mais tarde.',
          )
        },
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
      <Logo />

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
        <div className="flex items-center justify-between">
          <label className="font-medium text-zinc-900" htmlFor="password">
            Senha
          </label>

          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Esqueceu a senha?
          </Link>
        </div>

        <Input
          type="password"
          id="password"
          placeholder="********"
          {...register('password')}
        />

        <ErrorMessage error={errors.password} />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Entrar
      </Button>
    </form>
  )
}
