import { ProgressContainer, ProgressType } from './styles'

interface ProgressProps {
  porcentage: ProgressType
  text: string
}

export function Progress({ porcentage, text }: ProgressProps) {
  return (
    <ProgressContainer porcentage={porcentage}>
      <h3>
        {text} <span>{porcentage}</span>
      </h3>
      <div className="bar">
        <span></span>
      </div>
    </ProgressContainer>
  )
}
