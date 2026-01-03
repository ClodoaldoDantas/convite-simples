import { headers } from 'next/headers'
import Link from 'next/link'
import { FaArrowRightFromBracket, FaLock, FaUserPlus } from 'react-icons/fa6'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'

export async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <header className="container mx-auto p-4 flex items-center justify-center md:justify-between">
      <Logo />

      <nav className="hidden md:flex items-center gap-2">
        {session ? (
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">
              <FaLock />
              Acessar Painel
            </Link>
          </Button>
        ) : (
          <>
            <Button asChild variant="outline" size="sm">
              <Link href="/sign-in">
                <FaArrowRightFromBracket />
                Entra na plataforma
              </Link>
            </Button>

            <Button asChild size="sm">
              <Link href="/sign-up">
                <FaUserPlus />
                Criar uma conta
              </Link>
            </Button>
          </>
        )}
      </nav>
    </header>
  )
}
