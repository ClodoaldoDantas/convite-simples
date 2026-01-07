import Link from 'next/link'
import { Divider } from '@/components/divider'
import { SignInWithGoogle } from '../_components/sign-in-with-google'
import { SignUpForm } from './_components/sign-up-form'

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />

      <p className="text-center text-sm mt-4 text-zinc-500">
        Já tem uma conta?{' '}
        <Link className="text-blue-600 hover:underline" href="/sign-in">
          Faça login
        </Link>
      </p>

      <Divider className="w-full">ou</Divider>

      <SignInWithGoogle />
    </>
  )
}
