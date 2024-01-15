import styled from 'styled-components'

export type ProgressType = string

interface ProgressConstainerProps {
  porcentage: ProgressType
}

export const ProgressContainer = styled.div<ProgressConstainerProps>`
  padding: 1rem 0;

  > h3 {
    font-size: 1.7rem;
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['text-color']};
    }
  }

  .bar {
    height: 2.5rem;
    border-radius: 0.6rem;
    border: 0.2rem solid ${(props) => props.theme['main-color']};
    padding: 0.5rem;
    margin: 1rem 0;

    > span {
      display: block;
      height: 100%;
      ${(props) => {
        return `width: ${props.porcentage}`
      }};
      border-radius: 0.3rem;
      background-color: ${(props) => props.theme['main-color']};
    }
  }
`
