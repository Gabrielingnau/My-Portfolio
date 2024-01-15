import styled from 'styled-components'

export const ContatoContainer = styled.div`
  width: 100%;
  min-height: auto;
  padding: 0 9% 2rem;

  @media (max-width: 991px) {
    padding: 2rem 4%;
  }

  @media (max-height: 600px) {
    margin-top: 10rem;
  }

  @media (max-height: 500px) {
    margin-top: 20rem;
  }

  @media (max-height: 400px) {
    margin-top: 30rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 8% 10rem;
    margin-bottom: -10rem;
  }
`

export const Form = styled.form`
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;

  .input-box {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 400px) {
      flex-direction: column;
    }
  }

  .textarea-field {
    position: relative;
    margin: 0.8rem 0 2.7rem;
    display: flex;

    textarea {
      width: 100%;
      height: 100%;
      padding: 1.5rem;
      font-size: 1.6rem;
      color: ${(props) => props.theme['text-color']};
      background: transparent;
      border-radius: 0.6rem;
      border: 0.2rem solid ${(props) => props.theme['main-color']};
      resize: none;

      &::placeholder {
        color: ${(props) => props.theme['text-color']};
      }

      &:focus ~ .focus {
        width: 100%;
      }

      &:valid ~ .focus {
        width: 100%;
      }
    }
  }

  .focus {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: 0.4s;
    border-radius: 0.6rem;
    background: ${(props) => props.theme['green-700']};
    opacity: 0.5;
  }
`
