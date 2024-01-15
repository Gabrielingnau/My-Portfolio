import styled from 'styled-components'

export const HabilidadesContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 9%;

  .skills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
  }

  @media (max-width: 991px) {
    padding: 2rem 4%;
    height: 80vh;
  }

  @media (max-width: 600px) {
    padding: 2rem 8%;
  }
`

export const SkillsColunm = styled.div`
  flex: 1 1 40rem;

  .title {
    font-size: 2.5rem;
    margin: 0 0 2.5rem;
    position: relative;
  }

  .skills-box {
    position: relative;
    .skills-content {
      position: relative;
      border: 0.2rem solid ${(props) => props.theme['main-color']};
      border-radius: 0.6rem;
      padding: 0.5rem 1.5rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        z-index: -1;
        transition: 0.4s;
        background-color: ${(props) => props.theme['green-700']};
        opacity: 0.5;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 991px) {
    &:last-child {
      margin-bottom: 5rem;
    }
  }
`
