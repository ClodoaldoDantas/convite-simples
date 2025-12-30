import { Button } from '@/components/ui/button'
import { occasionTypes } from '../_constants/occasion-types'

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
