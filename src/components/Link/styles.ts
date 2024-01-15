import styled from 'styled-components'
import { defaultTheme } from '../../Styles/themes/default'

export type LinkVariantColor = 'bgColor' | 'mainColor' | 'secundBgColor'

interface LinkContainerProps {
  variant: LinkVariantColor;
}

const LinkBackground = {
  bgColor: defaultTheme['bg-color'],
  mainColor: defaultTheme['main-color'],
  secundBgColor: defaultTheme['main-color'],
}

const LinkAnimation = {
  bgColor: defaultTheme['main-color'],
  mainColor: defaultTheme['bg-color'],
  secundBgColor: defaultTheme['secund-bg-color'],
}

const LinkHover = {
  bgColor: defaultTheme['bg-color'],
  mainColor: defaultTheme['main-color'],
  secundBgColor: defaultTheme['main-color'],
}

const LinkColor = {
  bgColor: defaultTheme['main-color'],
  mainColor: defaultTheme['bg-color'],
  secundBgColor: defaultTheme['secund-bg-color'],
}

export const LinkContainer = styled.div<LinkContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    position: relative;
      button {
      border: none;
      position: relative;
      display: inline-flex;
      padding: 2rem 5rem;
      ${(props) => {
        return `background-color: ${LinkBackground[props.variant]}`
      }};
      border: 0.2rem solid ${(props) => props.theme['main-color']};
      border-radius: 8px;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.1rem;
      ${(props) => {
        return `color: ${LinkColor[props.variant]}`
      }};
      z-index: 1;
      overflow: hidden;
      transition: 0.4s;
  
      &::before {
        position: relative;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        z-index: -1;
        transition: 0.4s;
        ${(props) => {
          return `background-color: ${LinkAnimation[props.variant]}`
        }};
      }
  
      &:hover::before {
        width: 100%;
      }
  
      &:hover {
        ${(props) => {
          return `color: ${LinkHover[props.variant]}`
        }};
      }
    }
  }
`

export const IperLink = styled.div<LinkContainerProps>`
  position: relative;
  a {
    position: relative;
    display: inline-flex;
    display: flex;
    align-items: center;
    height: 6.9rem;
    padding: 0 5rem;
    ${(props) => {
      return `background-color: ${LinkBackground[props.variant]}`
    }};
    border: 0.2rem solid ${(props) => props.theme['main-color']};
    border-radius: 8px;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    ${(props) => {
      return `color: ${LinkColor[props.variant]}`
    }};
    z-index: 1;
    overflow: hidden;
    transition: 0.4s;
    text-align: center;
    gap: .8rem;

    svg {
      ${(props) => {
      return `color: ${LinkColor[props.variant]}`
      }};
      transition: 0.5s;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      z-index: -1;
      transition: 0.4s;
      ${(props) => {
        return `background-color: ${LinkAnimation[props.variant]}`
      }};
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      ${(props) => {
        return `color: ${LinkHover[props.variant]}`
      }};

      svg {
        ${(props) => {
        return `color: ${LinkHover[props.variant]}`
      }};
      }
    }
  }
`
