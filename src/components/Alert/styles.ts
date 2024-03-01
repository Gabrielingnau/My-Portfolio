import styled from "styled-components";

export const ContainerAlert = styled.div`
  position: absolute;
  top: -7rem;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-name: appear;
  animation-duration: 5s;
  animation-timing-function: cubic-bezier(0.27, 1, 0, 1);

  @keyframes appear {
    0% {
      top: -7rem;
    }

    50% {
      top: 5rem;
    }

    100% {
      top: -7rem;
      display: none;
    }
  }
`

export const Alert = styled.div`
 width: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme["main-color"]};
  border-radius: 0.8rem;

  p {
    padding: 1.5;
    padding-left: 1;
    font-size: 1.6rem;
    color: ${props => props.theme["text-color"]};
    background: transparent;
  }
`
