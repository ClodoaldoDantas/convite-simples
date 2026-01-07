'use client'

import { FaGoogle } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export function SignInWithGoogle() {
  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/dashboard',
    })
  }

  return (
    <Button variant="outline" className="w-full" onClick={handleSignIn}>
      <FaGoogle />
      Entrar com Google
    </Button>
  )
}
