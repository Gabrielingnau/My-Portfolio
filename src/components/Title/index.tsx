import { Reload } from '../Reload'
import { TitleContainer } from './styles'

interface TitleProps {
  text: string
  textSpan?: string
}

export function Title({ text, textSpan }: TitleProps) {
  return (
    <TitleContainer>
      <Reload variant={1} />
      {text} <span>{textSpan}</span>
    </TitleContainer>
  )
}
