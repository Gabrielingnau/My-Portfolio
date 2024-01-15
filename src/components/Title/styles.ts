import styled from 'styled-components'

export const TitleContainer = styled.h2`
  font-size: 5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  span {
    color: ${(props) => props.theme['main-color']};
  }
`
