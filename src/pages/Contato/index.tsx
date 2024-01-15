import { ContatoContainer, Form } from './styles'
import { Input } from '../../components/Input'
import { Link } from '../../components/Link'
import { Title } from '../../components/Title'
import { Reload } from '../../components/Reload'

export function Contato() {
  return (
    <ContatoContainer>
      <Title text="Entre em" textSpan="Contato" />
      <Form>
        <div className="input-box">
        <Reload variant={2}/>
          <Input type="text" placeholder="Nome" />

          <Input type="text" placeholder="Email" />
        </div>

        <div className="input-box">
        <Reload variant={3}/>
          <Input type="number" placeholder="Numero de Telefone" />

          <Input type="text" placeholder="Assunto" />
        </div>

        <div className="textarea-field">
        <Reload variant={4}/>
          <textarea rows={8} placeholder="Sua Mensagem" required></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box">
          <Link>
            <button type="submit" className="btn">
              Enviar
            </button>
          </Link>
        </div>
      </Form>
    </ContatoContainer>
  )
}
