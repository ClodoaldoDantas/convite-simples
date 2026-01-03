import Link from 'next/link'
import { FaArrowRightFromBracket, FaUserPlus } from 'react-icons/fa6'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="container mx-auto p-4 flex items-center justify-center md:justify-between">
      <Logo />

      <nav className="hidden md:flex items-center gap-2">
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
      </nav>
    </header>
  )
}
