import { InputContainer } from './styles'

interface InputProps {
  placeholder: string
  type: string
}

export function Input({ placeholder, type }: InputProps) {
  return (
    <InputContainer>
      <input type={type} placeholder={placeholder} required />
      <span className="focus"></span>
    </InputContainer>
  )
}
