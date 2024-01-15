import { HeaderContainer, Navegation, Sidebar } from './styles'
import { Link, useParams } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { TbX } from 'react-icons/tb'
import { useEffect, useState } from 'react'
import { Reload } from '../Reload'

export function Header() {
  const { id } = useParams()
  const [sidebar, setSidebar] = useState(false)

  const [width, detectHw] = useState({
    winWidth: window.outerWidth,
  })

  const home = id == undefined
  const sobre = id == '1'
  const educação = id == '2'
  const habilidades = id == '3'
  const contato = id == '4'

  function handleClickNav() {
    setSidebar(!sidebar)
  }

  const detecSize = () => {
    detectHw({
      winWidth: window.outerWidth,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detecSize)

    return () => {
      window.removeEventListener('resize', detecSize)
    }
  }, [width])

  useEffect(() => {
    setSidebar(false)
  }, [width.winWidth >= 750])

  return (
    <HeaderContainer>
      <a href="/" className="logo">
        <Reload variant={1} />
        Gabriel.
      </a>
      <button>
        <Reload variant={2} />
        {!sidebar && <FiMenu onClick={handleClickNav} size={20} />}
        {sidebar && <TbX onClick={handleClickNav} size={20} />}
      </button>
      <Navegation>
        <Reload variant={2} />
        <Link to="/">
          <span className={home ? 'active' : ''}>Home</span>
        </Link>
        <Link to="/Sobre/1">
          <span className={sobre ? 'active' : ''}>Sobre</span>
        </Link>
        <Link to="/Educação/2">
          <span className={educação ? 'active' : ''}>Educação</span>
        </Link>
        <Link to="/Habilidades/3">
          <span className={habilidades ? 'active' : ''}>Habilidades</span>
        </Link>
        <Link to="/Contato/4">
          <span className={contato ? 'active' : ''}>Contato</span>
        </Link>
      </Navegation>
      <div className={sidebar ? 'activee' : 'nav'}>
        {sidebar && (
          <Sidebar>
            <Link onClick={handleClickNav} to="/">
              <span className={home ? 'active' : ''}>Home</span>
            </Link>
            <Link onClick={handleClickNav} to="/Sobre/1">
              <span className={sobre ? 'active' : ''}>Sobre</span>
            </Link>
            <Link onClick={handleClickNav} to="/Educação/2">
              <span className={educação ? 'active' : ''}>Educação</span>
            </Link>
            <Link onClick={handleClickNav} to="/Habilidades/3">
              <span className={habilidades ? 'active' : ''}>Habilidades</span>
            </Link>
            <Link onClick={handleClickNav} to="/Contato/4">
              <span className={contato ? 'active' : ''}>Contato</span>
            </Link>
          </Sidebar>
        )}
      </div>
    </HeaderContainer>
  )
}
