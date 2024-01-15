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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident ea officiis earum dolorum quasi harum, sint omnis fuga
              id quis, consequuntur labore enim. Omnis atque alias fugiat.
              Quidem, ea voluptatem.
              <Reload variant={4} />
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident ea officiis earum dolorum quasi harum, sint omnis fuga
              id quis, consequuntur labore enim. Omnis atque alias fugiat.
              Quidem, ea voluptatem.
              <Reload variant={4} />
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident ea officiis earum dolorum quasi harum, sint omnis fuga
              id quis, consequuntur labore enim. Omnis atque alias fugiat.
              Quidem, ea voluptatem.
              <Reload variant={4} />
            </p>
          </SobreContent>
        </div>
      </section>
    </SobreContainer>
  )
}
