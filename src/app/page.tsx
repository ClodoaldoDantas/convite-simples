import Link from 'next/link'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center font-sans">
      <Button asChild>
        <Link href="/sign-in">
          <FaArrowRightFromBracket />
          Entrar na plataforma
        </Link>
      </Button>
    </main>
  )
}
