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
  gap: 5rem;

  .education-column {
    flex: 1 1 40rem;

    .title {
      font-size: 2.5rem;
      margin: 0 0 1.5rem 2rem;
      position: relative;
    }
  }
`

export const EducationBox = styled.div`
  border-left: 0.2rem solid ${(props) => props.theme['main-color']};
  position: relative;

  .education-content {
    position: relative;
    padding-left: 2rem;
  }

  .education-content::before {
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

export const Content = styled.div`
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

  @media (max-width: 991px) {
    &:last-child {
      margin-bottom: 5rem;
    }
    }
`
