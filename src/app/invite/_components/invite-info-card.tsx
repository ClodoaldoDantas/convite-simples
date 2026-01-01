import type { IconType } from 'react-icons/lib'

type InviteInfoCardProps = {
  icon: IconType
  label: string
  value: string
}

export function InviteInfoCard({
  icon: Icon,
  label,
  value,
}: InviteInfoCardProps) {
  return (
    <li className="p-4 w-full bg-zinc-100 rounded-lg flex items-center gap-5">
      <div className="h-12 w-12 rounded-lg bg-zinc-300 flex items-center justify-center">
        <Icon className="size-6 text-zinc-700" />
      </div>

      <div>
        <span className="text-xs uppercase tracking-wider text-zinc-500">
          {label}
        </span>
        <p className="font-semibold text-zinc-900">{value}</p>
      </div>
    </li>
  )
}
