import Link from 'next/link'
import { FaArrowRightFromBracket, FaLock, FaUserPlus } from 'react-icons/fa6'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { verifySession } from '@/lib/session'

export async function Header() {
  const session = await verifySession()

  return (
    <header className="container mx-auto p-4 flex items-center justify-between">
      <Logo />

      <nav className="flex items-center gap-2">
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
                Fazer login
              </Link>
            </Button>

            <Button className="hidden md:flex" asChild size="sm">
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
