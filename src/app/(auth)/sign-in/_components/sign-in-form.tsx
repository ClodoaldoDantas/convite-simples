'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'

const schema = z.object({
  email: z.email('Endereço de e-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type SignInFormData = z.infer<typeof schema>

export function SignInForm() {
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
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
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

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Entrar
      </Button>
    </form>
  )
}
