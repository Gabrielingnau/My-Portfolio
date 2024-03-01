import styled from 'styled-components'

export const ContentContainer = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1.1rem;
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme['main-color']};
    border-radius: 50%;
  }
`

export const Contente = styled.div`
  position: relative;
  padding: 1rem;
  border: 0.2rem solid ${(props) => props.theme['main-color']};
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  overflow: hidden;

  .year {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme['main-color']};
    padding-bottom: 0.5rem;

    svg {
      padding-right: 0.5rem;
    }
  }

  > h3 {
    font-size: 2rem;
  }

  > p {
    font-size: 1.6rem;
    padding-top: 0.5rem;
  }

  > a {
    color: ${(props) => props.theme['main-color']};
    font-size: 1.3rem;
    
    display: flex;
    align-items: center;

    gap: .8rem;
    padding-top: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${(props) => props.theme['green-700']};
    z-index: -1;
    transition: 0.4s;
    opacity: 0.5;
  }

  &:hover::before {
    width: 100%;
  }
`
