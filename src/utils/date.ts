import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

export function formatDate(date: string | Date) {
  return dayjs(date, { locale: 'pt-br' }).format('DD [de] MMMM [de] YYYY')
}
