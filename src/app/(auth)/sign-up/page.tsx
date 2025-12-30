import Link from 'next/link'
import { SignUpForm } from './_components/sign-up-form'

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />

      <p className="text-center mt-4 text-zinc-500">
        Já tem uma conta?{' '}
        <Link className="text-blue-600 hover:underline" href="/sign-in">
          Faça login
        </Link>
      </p>
    </>
  )
}
