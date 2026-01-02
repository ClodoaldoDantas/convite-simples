import Image from 'next/image'

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-zinc-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <span className="uppercase text-sm text-zinc-600 tracking-wider mb-4">
            Simples e rápido
          </span>
          <h2 className="text-3xl text-center text-zinc-900 font-semibold">
            Como funciona
          </h2>
        </header>

        <div className="flex flex-col items-center gap-8">
          <Image
            src="/onboarding.svg"
            alt="Ilustração de um monitor exibindo o processo de criação de convites"
            width={400}
            height={400}
          />

          <ul className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            <li className="bg-white min-w-75 border border-zinc-200 p-6 rounded-md">
              <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                <span className="font-semibold text-lg">1</span>
              </div>

              <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                Escolha o tema
              </h3>

              <p className="text-zinc-500">Selecione o tema do evento</p>
            </li>

            <li className="bg-white min-w-75 border border-zinc-200 p-6 rounded-md">
              <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                <span className="font-semibold text-lg">2</span>
              </div>

              <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                Personalize
              </h3>

              <p className="text-zinc-500">Adicione os detalhes</p>
            </li>

            <li className="bg-white min-w-75 border border-zinc-200 p-6 rounded-md">
              <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                <span className="font-semibold text-lg">3</span>
              </div>

              <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                Compartilhe
              </h3>

              <p className="text-zinc-500">Envie para os convidados</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
