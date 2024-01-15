import {
  HomeContainer,
  HomeContent,
  TextAnimate,
  BtnBox,
  HomeSci,
  HomeImgHover,
} from './styles'
import { Link } from '../../components/Link'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { Reload } from '../../components/Reload'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>         
        <Reload variant={2}/>
          Olá, eu sou o <span>Gabriel Lingnau</span>
        </h1>
        <TextAnimate>
          <Reload variant={3}/>
          <h3>Desenvolvedor Fullstack</h3>
        </TextAnimate>
        <p>
         <Reload variant={4}/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facilis
          ab magnam similique, doloribus officia minima impedit magni obcaecati
          beatae? Provident atque laudantium voluptatibus, debitis eveniet modi
          temporibus deserunt quos.
        </p>
        
        <div className="links">

        <BtnBox>
          <Link href="#" text="Curriculo" />

          <Link
            href="https://api.whatsapp.com/send?phone=5566984419252"
            text="Fale comigo"
            variant="bgColor"
          />
        </BtnBox>
      <HomeSci>
      <Reload variant={6}/>
        <a className='b' href="https://github.com/Gabrielingnau">
          <FiGithub size={20} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5566984419252">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-lingnau-3bb17b266/">
          <FaLinkedinIn size={20} />
        </a>
      </HomeSci>
        </div>
      </HomeContent>

      <HomeImgHover>
       <Reload variant={7}/>
      </HomeImgHover>
    </HomeContainer>
  )
}
