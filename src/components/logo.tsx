import Image from 'next/image'
import logoImg from '@/assets/logo.svg'

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image src={logoImg} alt="Logo" width={48} height={48} quality={100} />
    </div>
  )
}
