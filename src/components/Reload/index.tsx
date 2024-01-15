import { ReloadContainer } from './styles'

interface ReloadProps {
  variant?: number
}

export function Reload ({variant = 1} : ReloadProps) {

  return (
    <ReloadContainer variant={variant} />
  )
}