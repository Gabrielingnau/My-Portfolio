import styled from 'styled-components'

export const EducaçãoContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
  padding: 0 9%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: auto;
  padding-bottom: 5rem;
  margin-top: 15rem;

  body {
    ${(props) => props.theme['secund-bg-color']}
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    padding: 2rem 4%;
    margin-top: 10rem;
    height: 100vh;
  }

  @media (max-width: 600px) {
    padding: 2rem 8%;
  }

  @media (max-width: 400px) {
    margin-top: 20rem;
  }
`

export const EducationRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  .education-column {
    flex: 1 1 40rem;

    .title {
      font-size: 2.5rem;
      margin: 0 0 1.5rem 2rem;
      position: relative;
    }
  }

  @media (max-width: 991px) {
    & div:last-child div:last-child div:last-child div:last-child {
      margin-bottom: 5rem;
    }
  }
`

export const EducationBox = styled.div`
  border-left: 0.2rem solid ${(props) => props.theme['main-color']};
  position: relative;
`
