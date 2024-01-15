import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
 }

 html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['main-color']};
 }

 body {
  background-color: ${(props) => props.theme['bg-color']};
  color: ${(props) => props.theme['text-color']};
 }

 body, a, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['text-color']};
 }

 button, a {
  cursor: pointer;
 }

 svg {
  font-size: 2rem;
 }



 @media (min-width: 2000px) {
  html {
  font-size: 100%;
 }
 }

 @media (max-width: 1200px) {
  html {
  font-size: 50%;
 }
 }

 @media (max-width: 800px) {
  html {
  font-size: 40%;
 }
 }

 @media (max-width: 500px) {
  html {
  font-size: 20%;
 }
 }

 @media (max-width: 600px) {
  html {
  font-size: 40%;
 }
 }
`
