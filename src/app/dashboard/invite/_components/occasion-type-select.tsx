import { Button } from '@/components/ui/button'

export const occasionTypes = [
  { icon: '🎁', label: 'Aniversário', value: 'birthday' },
  { icon: '💍', label: 'Casamento', value: 'wedding' },
  { icon: '👶', label: 'Chá Revelação', value: 'revelation' },
  { icon: '🍼', label: 'Chá de Fraldas', value: 'diaper_shower' },
  { icon: '🏠', label: 'Chá de casa nova', value: 'house_warming' },
  { icon: '🏢', label: 'Eventos Empresariais', value: 'business_events' },
  { icon: '🎄', label: 'Natal', value: 'christmas' },
  { icon: '🎉', label: 'Ano Novo', value: 'new_year' },
  { icon: '❓', label: 'Outro', value: 'other' },
]

export type OccasionType =
  | 'birthday'
  | 'wedding'
  | 'revelation'
  | 'diaper_shower'
  | 'house_warming'
  | 'business_events'
  | 'christmas'
  | 'new_year'
  | 'other'

type OccasionTypeSelectProps = {
  value: OccasionType
  onChange: (value: OccasionType) => void
}

export function OccasionTypeSelect({
  value,
  onChange,
}: OccasionTypeSelectProps) {
  return (
    <div className="flex items-center overflow-x-auto gap-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pb-2">
      {occasionTypes.map(type => (
        <Button
          size="sm"
          className="rounded-full shrink-0"
          variant={value === type.value ? 'secondary' : 'outline'}
          key={type.value}
          type="button"
          onClick={() => onChange(type.value as OccasionType)}
        >
          {type.icon} {type.label}
        </Button>
      ))}
    </div>
  )
}
