import Image from 'next/image'
import onboardingImage from '@/assets/onboarding.svg'

const steps = [
  {
    title: 'Escolha o tema',
    description: 'Selecione o tema do evento',
  },
  {
    title: 'Personalize',
    description: 'Adicione os detalhes',
  },
  {
    title: 'Compartilhe',
    description: 'Envie para os convidados',
  },
]

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
            src={onboardingImage}
            alt="Ilustração de um monitor exibindo o processo de criação de convites"
            width={400}
            height={400}
          />

          <ul className="grid gap-4 md:grid-cols-3 md:max-w-5xl md:mx-auto w-full">
            {steps.map((step, index) => (
              <li
                className="bg-white border border-zinc-200 p-6 rounded-md"
                key={step.title}
              >
                <div className="size-12 bg-zinc-200 flex items-center justify-center rounded-md mb-4">
                  <span className="font-semibold text-lg">{index + 1}</span>
                </div>

                <h3 className="text-xl text-zinc-900 font-semibold mb-0.5">
                  {step.title}
                </h3>

                <p className="text-zinc-500">{step.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
