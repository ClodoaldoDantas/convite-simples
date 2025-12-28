import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { SignOutButton } from './_components/sign-out-button'

export default async function DashboardPage() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">
            Meus Convites
          </h1>
          <p className="text-zinc-500">Gerencie seus convites aqui.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/dashboard/invite/new">
              <FaPlus />
              Criar Convite
            </Link>
          </Button>

          <SignOutButton />
        </div>
      </header>

      {/* TODO: exibir listagem de convites criados */}
    </>
  )
}
