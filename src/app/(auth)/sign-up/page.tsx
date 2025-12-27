import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignUpPage() {
  return (
    <main className="h-screen flex items-center justify-center font-sans">
      <div className="max-w-md w-full p-6 bg-white border border-zinc-300 rounded-md">
        <form className="space-y-4">
          <div className="flex items-center justify-center">
            <FaEnvelopeOpenText className="size-10 text-orange-600" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-zinc-900" htmlFor="name">
              Nome
            </label>
            <Input type="text" id="name" placeholder="Seu nome" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-zinc-900" htmlFor="email">
              E-mail
            </label>
            <Input type="email" id="email" placeholder="you@example.com" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-zinc-900" htmlFor="password">
              Senha
            </label>
            <Input type="password" id="password" placeholder="********" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="font-medium text-zinc-900"
              htmlFor="confirm-password"
            >
              Confirmar Senha
            </label>

            <Input
              type="password"
              id="confirm-password"
              placeholder="********"
            />
          </div>

          <Button type="submit" className="w-full">
            Cadastre-se
          </Button>
        </form>
      </div>
    </main>
  )
}
