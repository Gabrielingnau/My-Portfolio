import { Reload } from '../../components/Reload'
import { Title } from '../../components/Title'
import {
  Content,
  EducationBox,
  EducationRow,
  EducaçãoContainer,
} from './styles'
import { IoCalendarOutline } from 'react-icons/io5'

export function Educação() {
  return (
    <EducaçãoContainer>
      <Title text="Minha" textSpan="Jornada" />

      <EducationRow>
        <div className="education-column">
          <h3 className="title"><Reload variant={2}/>Educação</h3>
          <EducationBox>
          <Reload variant={3}/>
            <div className="education-content">
              <Content>
                <div className="year">
                  <IoCalendarOutline  />
                  2022 - 2023
                </div>
                <h3>Aluno - RocketSeat</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita autem quis maiores aut obcaecati in excepturi
                  voluptatem minima placeat rem possimus, nihil, nobis nulla
                  vel! Numquam minima explicabo odit ullam.
                </p>
              </Content>
            </div>

            <div className="education-content">
              <Content>
                <div className="year">
                  <IoCalendarOutline />
                  2024
                </div>
                <h3>Aluno - RocketSeat</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita autem quis maiores aut obcaecati in excepturi
                  voluptatem minima placeat rem possimus, nihil, nobis nulla
                  vel! Numquam minima explicabo odit ullam.
                </p>
              </Content>
            </div>
          </EducationBox>
        </div>

        <div className="education-column">
          <h3 className="title"><Reload variant={4}/>Experiência</h3>
          <EducationBox>
          <Reload variant={5}/>
            <div className="education-content">
              <Content>
                <div className="year">
                  <IoCalendarOutline  />
                  2022 - 2023
                </div>
                <h3>Desenvolvedor Web</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita autem quis maiores aut obcaecati in excepturi
                  voluptatem minima placeat rem possimus, nihil, nobis nulla
                  vel! Numquam minima explicabo odit ullam.
                </p>
              </Content>
            </div>

            <div className="education-content">
              <Content>
                <div className="year">
                  <IoCalendarOutline  />
                  2024
                </div>
                <h3>Desenvolvedor Web</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita autem quis maiores aut obcaecati in excepturi
                  voluptatem minima placeat rem possimus, nihil, nobis nulla
                  vel! Numquam minima explicabo odit ullam.
                </p>
              </Content>
            </div>
          </EducationBox>
        </div>
      </EducationRow>
    </EducaçãoContainer>
  )
}
