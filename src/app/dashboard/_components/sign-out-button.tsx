'use client'

import { useRouter } from 'next/navigation'
import { FaPowerOff } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export function SignOutButton() {
  const router = useRouter()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/sign-in')
        },
      },
    })
  }

  return (
    <Button size="sm" variant="outline" onClick={handleSignOut}>
      <FaPowerOff />
      Sair da conta
    </Button>
  )
}
