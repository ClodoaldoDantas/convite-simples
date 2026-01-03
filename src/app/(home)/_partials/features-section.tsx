import { FaLock, FaRegCalendar, FaShare } from 'react-icons/fa6'

const features = [
  {
    icon: FaRegCalendar,
    title: 'Convites Personalizados',
    description:
      'Crie convites únicos para qualquer ocasião: Natal, Ano Novo, aniversários e muito mais.',
  },
  {
    icon: FaShare,
    title: 'Compartilhe Facilmente',
    description:
      'Envie seus convites por WhatsApp, email ou compartilhe o link diretamente.',
  },
  {
    icon: FaLock,
    title: 'Painel Administrativo',
    description:
      'Gerencie seus convites com facilidade através de um painel administrativo intuitivo e eficiente.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-zinc-900 font-semibold mb-12">
          Tudo que você precisa para criar convites perfeitos
        </h2>

        <ul className="grid gap-4 md:grid-cols-3 md:max-w-5xl md:mx-auto">
          {features.map(({ icon: Icon, title, description }) => (
            <li className="border border-zinc-200 p-6 rounded-md" key={title}>
              <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                <Icon className="size-5" />
              </div>

              <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                {title}
              </h3>

              <p className="text-zinc-500">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
