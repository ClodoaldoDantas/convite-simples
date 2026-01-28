import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown } from 'react-icons/fa6'

const faqItems = [
  {
    id: 1,
    question: 'O Convite Simples é realmente gratuito?',
    answer:
      'Sim! O Convite Simples é 100% gratuito. Você pode criar quantos convites quiser, usar todos os temas disponíveis e compartilhar sem nenhum custo.',
  },
  {
    id: 2,
    question: 'Preciso ter conhecimento de design para usar?',
    answer:
      'Não! Nossa plataforma foi criada para ser extremamente fácil de usar. Basta escolher um tema, preencher as informações do seu evento e pronto. Qualquer pessoa consegue criar convites lindos em minutos.',
  },
  {
    id: 3,
    question: 'Posso editar o convite depois de criado?',
    answer:
      'Sim! Você pode editar seus convites a qualquer momento através do painel administrativo. Altere data, hora, local ou qualquer outra informação sempre que precisar.',
  },
  {
    id: 4,
    question: 'Como funciona o compartilhamento?',
    answer:
      'Cada convite tem um link único. Você pode compartilhar esse link diretamente, enviar por WhatsApp com um clique ou enviar por email. Seus convidados conseguem visualizar o convite sem precisar fazer cadastro.',
  },
  {
    id: 5,
    question: 'Os convites funcionam em celulares?',
    answer:
      'Sim! Todos os nossos convites são 100% responsivos e ficam perfeitos em qualquer dispositivo: celular, tablet ou computador.',
  },
  {
    id: 6,
    question: 'Meus dados estão seguros?',
    answer:
      'Absolutamente! Utilizamos as melhores práticas de segurança, com autenticação moderna e infraestrutura de ponta para proteger seus dados.',
  },
]

export function FaqSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-zinc-600 mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl text-zinc-900 font-bold mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-base md:text-lg text-zinc-500">
            Tire suas dúvidas sobre o Convite Simples.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqItems.map(item => (
            <Accordion.Item
              key={item.id}
              value={`item-${item.id}`}
              className="bg-white rounded-lg border border-zinc-200 overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-50 transition-colors group">
                  <span className="text-lg font-semibold text-zinc-900 pr-4">
                    {item.question}
                  </span>

                  <FaChevronDown
                    className="text-zinc-500 transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0"
                    size={16}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
