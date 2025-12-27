import type { FieldError } from 'react-hook-form'

export function ErrorMessage({ error }: { error: FieldError | undefined }) {
  if (!error) {
    return null
  }

  return <span className="text-sm text-red-600">{error.message}</span>
}
