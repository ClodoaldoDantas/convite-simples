import { Button } from '@/components/ui/button'
import { type OccasionType, occasionTypes } from '../_constants/occasion-types'

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
      {Object.entries(occasionTypes).map(([key, data]) => (
        <Button
          size="sm"
          className="rounded-full shrink-0"
          variant={value === key ? 'secondary' : 'outline'}
          key={key}
          type="button"
          onClick={() => onChange(key as OccasionType)}
        >
          {data.icon} {data.label}
        </Button>
      ))}
    </div>
  )
}
