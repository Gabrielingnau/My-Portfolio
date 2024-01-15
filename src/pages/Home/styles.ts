import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 9%;
  background-image: url('../../../src/assets/Home.png');
  background-position: center;
  background-size: cover;

  @media (max-width: 991px) {
    background: ${(props) => props.theme['bg-color']};
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }
`

export const HomeContent = styled.div`
  max-width: 70%;

  h1 {
    position: relative;
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
    white-space: nowrap;
  }

  p {
    position: relative;
    font-size: 1.6rem;
    margin: 2rem 0 4rem;
  }

  .links {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10rem;

    h1 {
      position: relative;
      white-space: wrap;
      margin-bottom: 3rem;
      text-align: center;
    }
    p {
      position: relative;
      margin: 4rem 0 4rem;
      text-align: center;
    }

    .links {
      height: 40%;
    }
  }

  @media (max-width: 800px) and (max-height: 400px) {
    padding: 2rem 8%;
    justify-content: flex-start;
    margin-top: 15rem;

    .links {
      min-height: 30rem;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 8%;
    justify-content: flex-start;
    margin-top: 15rem;

    .links {
      min-height: 40rem;
      margin-top: -8rem;
    }
  }
`

export const TextAnimate = styled.div`
  position: relative;
  width: 41rem;

  h3 {
    font-size: 3.2rem;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 0.7px ${(props) => props.theme['main-color']};
    white-space: nowrap;
    background-image: linear-gradient(
      ${(props) => props.theme['main-color']},
      ${(props) => props.theme['main-color']}
    );
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-position: -41rem 0;
    animation: homeBgText 6s linear infinite;
    animation-delay: 1s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      z-index: 2;
      border-right: 2px solid ${(props) => props.theme['main-color']};
      animation: homeCursorText 6s linear infinite;
      animation-delay: 1s;
    }
  }

  @keyframes homeBgText {
    0%,
    10%,
    100% {
      background-position: -41rem 0;
    }

    65%,
    85% {
      background-position: 0 0;
    }
  }

  @keyframes homeCursorText {
    0%,
    10%,
    100% {
      width: 0;
    }

    65%,
    78%,
    85% {
      width: 100%;
      opacity: 1;
    }

    75%,
    81% {
      opacity: 0;
    }
  }
`

export const BtnBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 46rem;
  height: 5rem;

  @media (max-width: 600px) {
    margin-top: 10rem;
    justify-content: center;
    gap: 5%;
  }
`

export const HomeSci = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  position: relative;

  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    z-index: 1;
    background: transparent;
    border: 0.2rem solid ${(props) => props.theme['main-color']};
    border-radius: 50%;
    color: ${(props) => props.theme['main-color']};
    overflow: hidden;
    transition: 0.4s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      z-index: -1;
      transition: 0.4s;
      background-color: ${(props) => props.theme['main-color']};
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      color: ${(props) => props.theme['bg-color']};
    }
  }

  @media (max-width: 991px) {
    position: none;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    bottom: 0;
    margin-bottom: 10rem;
    left: 0;
    right: 0;
    width: 100%;
    align-items: flex-start;
  }
`

export const HomeImgHover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 38%;
  height: 100%;
  background: transparent;
  transition: 3s;

  &:hover {
    background-color: ${(props) => props.theme['bg-color']};
    opacity: 0.8;
  }

  @media (max-width: 991px) {
    display: none;
  }
`
