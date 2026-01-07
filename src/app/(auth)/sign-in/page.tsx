import Link from 'next/link'
import { Divider } from '@/components/divider'
import { SignInWithGoogle } from '../_components/sign-in-with-google'
import { SignInForm } from './_components/sign-in-form'

export default function SignInPage() {
  return (
    <>
      <SignInForm />

      <p className="text-center text-sm mt-4 text-zinc-500">
        Ainda não tem uma conta?{' '}
        <Link className="text-blue-600 hover:underline" href="/sign-up">
          Cadastre-se
        </Link>
      </p>

      <Divider className="w-full">ou</Divider>

      <SignInWithGoogle />
    </>
  )
}
