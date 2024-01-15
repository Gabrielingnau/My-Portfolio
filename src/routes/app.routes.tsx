import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Sobre } from '../pages/Sobre'
import { DefaultLayout } from '../layouts/defaultLayout'
import { Contato } from '../pages/Contato'
import { Habilidades } from '../pages/Habilidades'
import { Educação } from '../pages/Educação'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre/:id" element={<Sobre />} />
        <Route path="/Educação/:id" element={<Educação />} />
        <Route path="/Habilidades/:id" element={<Habilidades />} />
        <Route path="/Contato/:id" element={<Contato />} />
      </Route>
    </Routes>
  )
}
