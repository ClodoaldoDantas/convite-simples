import { notFound } from 'next/navigation'
import {
  type OccasionType,
  occasionTypes,
} from '@/app/dashboard/invite/_constants/occasion-types'
import { InviteCard } from '@/components/invite-card'
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
    <main className="min-h-dvh w-full flex items-center justify-center font-sans px-4">
      <InviteCard
        icon={occasionTypes[data.occasionType as OccasionType]?.icon}
        title={data.title}
        description={data.description}
        address={data.address}
        date={data.date}
        time={data.time}
      />
    </main>
  )
}
