import { Reload } from '../../components/Reload'
import { Title } from '../../components/Title'
import { Content } from '../../components/Content'
import { EducationBox, EducationRow, EducaçãoContainer } from './styles'

export function Projetos() {
  return (
    <EducaçãoContainer>
      <Title text="Principais" textSpan="Projetos" />

      <EducationRow>
        <div className="education-column">
          <h3 className="title">
            <Reload variant={2} />
            FrontEnd
          </h3>
          <EducationBox>
            <Reload variant={3} />
            <Content
              year="2023"
              title="FoodExplorer"
              paragraph="O site desenvolvido é um cardápio digital para um restaurante conhecido como foodExplorer, onde é necessário autenticar para entrar no site através da tela de login."
              link='https://github.com/Gabrielingnau/FoodExplorer'
            />

            <Content
              year="2024"
              title="TimerPomodoro-2.0"
              paragraph=" A ideia é criar um relógio do tipo pomodoro, 
              esse relógio é uma versão melhorada de um outro que eu ja havia desenvolvido."
              link='https://github.com/Gabrielingnau/TimerPomodoro-2.0'
            />

            <Content
              year="2023"
              title="TypeWeather"
              paragraph="Testando TypeScript em um projeto que mostra informações de tempo."
              link='https://github.com/Gabrielingnau/TypeWeather'
            />
          </EducationBox>
        </div>

        <div className="education-column">
          <h3 className="title">
            <Reload variant={4} />
            BackEnd
          </h3>
          <EducationBox>
            <Reload variant={5} />
            <Content
              year="2023"
              title="FoodBackEnd"
              paragraph=" O site desenvolvido é um cardápio digital para um restaurante conhecido como foodExplorer, onde é necessário autenticar para entrar no site através da tela de login."
              link='https://github.com/Gabrielingnau/FoodBackEnd'
            />
            <Content
              year="2022"
              title="BackEndNotes"
              paragraph=" A ideia é criar um BackEnd em Node.js onde o usuário cadastra uma nota, preenche algumas informações (nome, descrição, nota) e cria tags relacionadas a ela."
              link='https://github.com/Gabrielingnau/BackEndNotes'
            />
            <Content
              year="2022"
              title="BackEndMovies"
              paragraph=" A ideia é criar um BackEnd em Node.js onde o usuário cadastra um Filme, preenche algumas informações (nome, descrição, nota) e cria tags relacionadas a ela."
              link='https://github.com/Gabrielingnau/BackEndMovies'
            />
          </EducationBox>
        </div>
      </EducationRow>
    </EducaçãoContainer>
  )
}
