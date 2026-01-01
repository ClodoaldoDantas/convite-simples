import { notFound } from 'next/navigation'
import {
  FaEnvelopeOpen,
  FaRegCalendar,
  FaRegClock,
  FaRegMap,
} from 'react-icons/fa6'
import {
  type OccasionType,
  occasionTypes,
} from '@/app/dashboard/invite/_constants/occasion-types'
import { Divider } from '@/components/divider'
import { formatDate } from '@/utils/date'
import { InviteInfoCard } from '../_components/invite-info-card'
import { getInvitationById } from './actions'

type InvitePageProps = {
  params: Promise<{ id: string }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { id } = await params
  const { data, error } = await getInvitationById(id)

  if (error || !data) {
    notFound()
  }

  return (
    <main className="min-h-dvh w-full flex items-center justify-center font-sans">
      <div className="max-w-lg w-full p-6 bg-white border border-zinc-300 rounded-md">
        <header className="text-center flex flex-col">
          <span role="img" className="text-5xl mb-4">
            {occasionTypes[data.occasionType as OccasionType]?.icon}
          </span>

          <span className="uppercase text-sm text-zinc-600 tracking-wider mb-4">
            Convite Especial
          </span>

          <h1 className="text-3xl text-zinc-900 font-semibold">{data.title}</h1>
          <p className="text-zinc-500 mt-2">{data.description}</p>
        </header>

        <Divider>
          <FaEnvelopeOpen className="text-orange-600" />
        </Divider>

        <section>
          <ul className="flex flex-col gap-2">
            <InviteInfoCard
              icon={FaRegCalendar}
              label="DATA"
              value={formatDate(data.date)}
            />

            <InviteInfoCard
              icon={FaRegClock}
              label="Horário"
              value={data.time}
            />

            <InviteInfoCard
              icon={FaRegMap}
              label="Endereço"
              value={data.address}
            />
          </ul>
        </section>
      </div>
    </main>
  )
}
