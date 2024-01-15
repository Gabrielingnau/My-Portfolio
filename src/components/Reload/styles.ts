import styled from 'styled-components'

interface ReloadContainerProps {
  variant: number
}

export const ReloadContainer = styled.span<ReloadContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 110%;
  height: 110%;
  background-color: ${(props) => props.theme['bg-color']};
  z-index: 98;
  animation: showRight 1s ease forwards;
  border-radius: 0;
  ${(props) => {
    return `animation-delay: calc(.2s * ${props.variant})`
  }};

  @keyframes showRight {
    100% {
      width: 0;
    }
  }
`
