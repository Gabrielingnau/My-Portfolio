import { Title } from '../../components/Title'
import { Progress } from '../../components/Progress'
import { HabilidadesContainer, SkillsColunm } from './styles'
import { Reload } from '../../components/Reload'

export function Habilidades() {
  return (
    <HabilidadesContainer>
      <Title text="Minhas" textSpan="Habilidades" />

      <div className="skills-row">
        <SkillsColunm>
          <h3 className="title">
            <Reload variant={2} />
            Habilidades de Codificação
          </h3>

          <div className="skills-box">
            <Reload variant={3} />
            <div className="skills-content">
              <Progress text="HTML" porcentage="90%" />

              <Progress text="CSS" porcentage="80%" />

              <Progress text="Javascript" porcentage="70%" />

              <Progress text="Typescript" porcentage="85%" />

              <Progress text="Node" porcentage="60%" />

              <Progress text="React" porcentage="85%" />
            </div>
          </div>
        </SkillsColunm>

        <SkillsColunm>
          <h3 className="title">
            <Reload variant={4} />
            Em Aprendizado
          </h3>

          <div className="skills-box">
            <Reload variant={5} />
            <div className="skills-content">
              <Progress text="Inglês" porcentage="20%" />

              <Progress text="Node" porcentage="60%" />

              <Progress text="Pyton" porcentage="10%" />

              <Progress text="SQL" porcentage="60%" />

              <Progress text="IA" porcentage="1%" />

              <Progress text="Styled-Components" porcentage="70%" />
            </div>
          </div>
        </SkillsColunm>
      </div>
    </HabilidadesContainer>
  )
}
