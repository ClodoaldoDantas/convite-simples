'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

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
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

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

        <div className="space-y-2">
          {faqItems.map(item => (
            <div
              key={item.id}
              className="not-last:border-b not-last:border-zinc-200"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full py-4 px-0 flex items-center justify-between transition-colors text-left"
              >
                <span className="text-zinc-900 font-medium">
                  {item.question}
                </span>

                <FaChevronDown
                  className={cn(
                    'size-4 text-zinc-600 transition-transform duration-300 shrink-0 ml-4',
                    openId === item.id && 'rotate-180',
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  openId === item.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0',
                )}
              >
                <div className="pb-4 px-0 text-zinc-600">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
