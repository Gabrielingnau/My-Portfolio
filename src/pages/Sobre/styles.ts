import styled from 'styled-components'

export const SobreContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
scroll-behavior: smooth;

section {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    .wraper {
      display: flex; 
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 4rem;
    }
  
    @media (max-width: 991px) {
      padding: 2rem 6%;
    }
  
    @media (max-width: 600px) {
      padding: 10rem 8%;
      justify-content: flex-end;
    }
}
  #Sobre {
  
    @media (max-width: 991px) {
      padding: 2rem 4%;
    }
  
    @media (max-width: 600px) {
      padding: 2rem 8%;
    }

    @media (min-width: 500px) and (max-height: 700px) {
        .wraper {
        flex-direction: row;
        gap: 5rem;
      }
    }


  }
`

export const SobreImg = styled.div`
  position: relative;
  min-width: 27rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 23rem;
    border-radius: 50%;
    border: 0.2rem solid ${(props) => props.theme['main-color']};
  }

  .circle-spin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    border-top: 0.2rem solid ${(props) => props.theme['bg-color']};
    border-bottom: 0.2rem solid ${(props) => props.theme['bg-color']};
    border-left: 0.2rem solid ${(props) => props.theme['main-color']};
    border-right: 0.2rem solid ${(props) => props.theme['main-color']};
    animation: aboutSpiner 7s  linear infinite;

    @keyframes aboutSpiner {
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }

  @media (max-height: 700px ) {
      min-width: 20rem;

      img {
        width: 22rem;
      }

      .circle-spin {
        height: 24rem;
      }
    }
`

export const SobreContent = styled.div`
  text-align: center;

  h3 {
    position: relative;
    font-size: 2.6rem;
  }

  p {
    position: relative;
    font-size: 1.6rem;
    margin: 2rem 0 3rem;
    max-width: 100rem;
  }

  @media (max-height: 700px) {
      max-width: 60rem;
  }
`


export const BtnBox = styled.div`
  display: inline-block;

  @media (max-width: 991px) {
    margin-bottom: 10rem;
  }
`
