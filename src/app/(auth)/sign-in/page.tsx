import { SignInForm } from './_components/sign-in-form'

export default function SignInPage() {
  return (
    <main className="h-screen flex items-center justify-center font-sans">
      <div className="max-w-md w-full p-6 bg-white border border-zinc-300 rounded-md">
        <SignInForm />
      </div>
    </main>
  )
}
