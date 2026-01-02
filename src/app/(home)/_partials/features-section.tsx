import { FaLock, FaRegCalendar, FaShare } from 'react-icons/fa6'

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-zinc-900 font-semibold mb-12">
          Tudo que você precisa para criar convites perfeitos
        </h2>

        <ul className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          <li className="border border-zinc-200 p-6 rounded-md">
            <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
              <FaRegCalendar className="size-5" />
            </div>

            <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
              Convites Personalizados
            </h3>

            <p className="text-zinc-500">
              Crie convites únicos para qualquer ocasião: Natal, Ano Novo,
              aniversários e muito mais.
            </p>
          </li>

          <li className="border border-zinc-200 p-6 rounded-md">
            <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
              <FaShare className="size-5" />
            </div>

            <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
              Compartilhe Facilmente
            </h3>

            <p className="text-zinc-500">
              Envie seus convites por WhatsApp, email ou compartilhe o link
              diretamente.
            </p>
          </li>

          <li className="border border-zinc-200 p-6 rounded-md">
            <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
              <FaLock className="size-5" />
            </div>

            <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
              Painel Administrativo
            </h3>

            <p className="text-zinc-500">
              Gerencie seus convites com facilidade através de um painel
              administrativo intuitivo e eficiente.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
