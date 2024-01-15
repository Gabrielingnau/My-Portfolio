import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  width: 49%;
  margin: 0.8rem 0;

  input {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    font-size: 1.6rem;
    color: ${(props) => props.theme['text-color']};
    background: transparent;
    border-radius: 0.6rem;
    border: 0.2rem solid ${(props) => props.theme['main-color']};

    &:focus ~ .focus {
      width: 100%;
    }

    &:valid ~ .focus {
      width: 100%;
    }

    &::placeholder {
      color: ${(props) => props.theme['text-color']};
    }
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`
