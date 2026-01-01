export const occasionTypes = {
  birthday: { icon: '🎁', label: 'Aniversário' },
  wedding: { icon: '💍', label: 'Casamento' },
  revelation: { icon: '👶', label: 'Chá Revelação' },
  diaper_shower: { icon: '🍼', label: 'Chá de Fraldas' },
  house_warming: { icon: '🏠', label: 'Chá de casa nova' },
  business_events: { icon: '🏢', label: 'Eventos Empresariais' },
  christmas: { icon: '🎄', label: 'Natal' },
  new_year: { icon: '🎉', label: 'Ano Novo' },
  other: { icon: '❓', label: 'Outro' },
}

export type OccasionType = keyof typeof occasionTypes
