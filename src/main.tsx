import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './Styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/themes/default'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
