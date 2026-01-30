import {
  FaEnvelopeOpen,
  FaRegCalendar,
  FaRegClock,
  FaRegMap,
} from 'react-icons/fa6'
import type { IconType } from 'react-icons/lib'
import { formatDate } from '@/utils/date'
import { Divider } from './divider'

type InviteCardProps = {
  icon: string
  title: string
  description: string | null
  date: string
  time: string
  address: string
}

export function InviteCard({
  icon,
  title,
  description,
  date,
  time,
  address,
}: InviteCardProps) {
  return (
    <div className="max-w-lg w-full p-4 md:p-6 bg-white border border-zinc-300 rounded-md">
      <div className="text-center flex flex-col">
        <span role="img" className="text-5xl mb-4">
          {icon}
        </span>

        <span className="uppercase text-sm text-zinc-600 tracking-wider mb-4">
          Convite Especial
        </span>

        <h2 className="text-2xl md:text-3xl text-zinc-900 font-semibold">
          {title}
        </h2>

        <p className="text-zinc-500 mt-2">{description}</p>
      </div>

      <Divider>
        <FaEnvelopeOpen className="text-orange-600" />
      </Divider>

      <div>
        <ul className="flex flex-col gap-2">
          <InviteCardInfo
            icon={FaRegCalendar}
            label="Data"
            value={formatDate(date)}
          />

          <InviteCardInfo icon={FaRegClock} label="Horário" value={time} />
          <InviteCardInfo icon={FaRegMap} label="Endereço" value={address} />
        </ul>
      </div>
    </div>
  )
}

type InviteCardInfoProps = {
  icon: IconType
  label: string
  value: string
}

export function InviteCardInfo({
  icon: Icon,
  label,
  value,
}: InviteCardInfoProps) {
  return (
    <li className="p-4 w-full bg-zinc-100 rounded-lg flex items-center gap-5">
      <div className="shrink-0 h-12 w-12 rounded-lg bg-zinc-300 flex items-center justify-center">
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
