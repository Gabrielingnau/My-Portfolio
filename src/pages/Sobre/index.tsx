import { SobreContainer, SobreContent, SobreImg } from './styles'
import { Title } from '../../components/Title'
import imgSobre from '../../assets/Sobre.png'
import { Reload } from '../../components/Reload'

export function Sobre() {
  return (
    <SobreContainer>
      <section id="Sobre">
        <Title text="Sobre" textSpan="Mim" />
        <div className="wraper">
          <SobreImg>
            <img src={imgSobre} alt="" />
            <span className="circle-spin"></span>
            <Reload variant={2} />
          </SobreImg>
          <SobreContent>
            <h3>
              <Reload variant={3} />
              Desenvolvedor Fullstack!
            </h3>
            <p>
            Ao completar mais de um ano dedicado ao desenvolvimento de projetos pessoais como desenvolvedor de software, posso afirmar que essa jornada tem sido incrivelmente enriquecedora e desafiadora. Esses projetos independentes permitiram-me explorar minha criatividade, experimentar novas tecnologias e aprimorar minhas habilidades de resolução de problemas. Ao desenvolver soluções que partem diretamente das minhas ideias, tenho a liberdade de explorar diversas abordagens e aprender com cada desafio encontrado, proporcionando uma experiência de aprendizado prática e valiosa.
              <Reload variant={4} />
            </p>
            <p>
            Essa experiência no desenvolvimento de projetos pessoais não apenas ampliou meu conjunto de habilidades técnicas, mas também fortaleceu minha capacidade de gerenciamento de tempo, organização e autoconfiança. A autonomia para definir metas e a satisfação de ver projetos pessoais ganharem vida impulsionam meu comprometimento contínuo com a melhoria e inovação. À medida que sigo desenvolvendo ideias e explorando novos horizontes, a experiência acumulada ao longo desse período se torna um alicerce sólido para futuros desafios no campo da tecnologia.
              <Reload variant={4} />
            </p>
          </SobreContent>
        </div>
      </section>
    </SobreContainer>
  )
}
