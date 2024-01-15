import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 9%;

  .logo {
    position: relative;
    font-size: 2.5rem;
    color: ${(props) => props.theme['text-color']};
    font-weight: 600;
  }

  button {
    position: relative;
    border: none;
    background: transparent;
    display: none;
    svg {
      font-size: 3.6rem;
      color: ${(props) => props.theme['text-color']};
      cursor: pointer;
      z-index: 20;
      position: relative;
    }
  }

  .nav {
    width: 70%;
    position: absolute;
    top: 100%;
    left: -35%;
    transition: 0.5s;
  }

  .activee {
    width: 70%;
    position: absolute;
    top: 100%;
    left: 0%;
    transition: 0.5s;
  }

  @media (max-width: 991px) {
    padding: 2rem 4%;
  }

  @media (max-width: 750px) {
    background-color: ${(props) => props.theme['bg-color']};

    button {
      display: block;
    }
  }
`

export const Navegation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  span {
    font-size: 1.7rem;
    color: ${(props) => props.theme['text-color']};
    font-weight: 500;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme['main-color']};
    }
  }

  .active {
    color: ${(props) => props.theme['main-color']};
  }

  @media (max-width: 750px) {
    display: none;
  }
`

export const Sidebar = styled.nav`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 8%;
  gap: 3rem;
  background-color: ${(props) => props.theme['bg-color']};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  span {
    font-size: 2rem;
    color: ${(props) => props.theme['text-color']};
    font-weight: 500;
    transition: 0.2s;
    margin: 2rem 0;

    &:hover {
      color: ${(props) => props.theme['main-color']};
    }
  }

  .active {
    color: ${(props) => props.theme['main-color']};
  }
`
