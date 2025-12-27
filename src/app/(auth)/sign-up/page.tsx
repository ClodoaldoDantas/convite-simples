import { SignUpForm } from './_components/sign-up-form'

export default function SignUpPage() {
  return (
    <main className="h-screen flex items-center justify-center font-sans">
      <div className="max-w-md w-full p-6 bg-white border border-zinc-300 rounded-md">
        <SignUpForm />
      </div>
    </main>
  )
}
